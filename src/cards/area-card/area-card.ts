import { customElement, state } from 'lit/decorators.js';
import { css, html, LitElement, nothing, type CSSResultGroup } from 'lit';
import type { AreaRegistryEntry } from '@hass/data/area_registry';
import type { HuiStackCard } from '@hass/panels/lovelace/cards/hui-stack-card';
import type { LovelaceCard } from '@hass/panels/lovelace/types';
import type { HomeAssistant } from '@hass/types';
import {
  createSensorManager,
  findSensorStates,
  type GoCard,
  type GoCardSensors,
  type GoCardSensorStates,
} from '@/utils/sensors';
import { logger } from '@/utils/logger';
import { navigate } from '@hass/common/navigate';
import { editorCardName, areaCardName, getDefaultAreaCardConfig, resolveConfigWithDeprecations } from './utils';
import type { AreaCardConfig } from './types';
import './area-card-editor';

@customElement(areaCardName)
export class GoHassAreaCard extends LitElement implements LovelaceCard, GoCard<AreaCardConfig> {
  _hass: HomeAssistant | undefined;
  sensors: GoCardSensors | undefined;

  @state() public area: AreaRegistryEntry | undefined;
  @state() public config: AreaCardConfig | undefined;
  @state() public sensorStates: GoCardSensorStates = { temperature: '', humidity: '', power: '' };

  // Whenever the state changes, a new `hass` object is set. Use this to update your content.
  set hass(hass: HomeAssistant) {
    this._hass = hass;

    this.area = hass.areas[this.config?.area || ''];
    if (!this.area) {
      throw new Error('Area not found!');
    }

    if (!this.sensors) {
      const sensorStates = findSensorStates(hass, this.area.area_id);
      this.sensors = {
        humidity: createSensorManager.call(this, 'humidity', sensorStates),
        temperature: createSensorManager.call(this, 'temperature', sensorStates),
        power: createSensorManager.call(this, 'power', sensorStates, 'sum'),
      };
    }

    this.updateSensors();
  }

  // The user supplied configuration. Throw an exception and Home Assistant
  // will render an error card.
  setConfig(config: AreaCardConfig) {
    if (!config.area) {
      throw new Error('You need to specify an area');
    }
    this.config = {
      aspect_ratio: '16:9',
      ...resolveConfigWithDeprecations(config),
    };

    logger.log('config', config);
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns in masonry view
  getCardSize() {
    return 3;
  }

  // The rules for sizing your card in the grid in sections view
  getGridOptions() {
    return {
      rows: 3,
      columns: 6,
      min_rows: 3,
      max_rows: 3,
    };
  }

  private updateSensors() {
    if (!this.sensors) return;

    const humidityState = this.sensors.humidity.getState();
    const temperatureState = this.sensors.temperature.getState();
    const powerState = this.sensors.power.getState();

    this.sensorStates = {
      temperature: temperatureState ? `${temperatureState.value} ${temperatureState.unit}` : '',
      humidity: humidityState ? `${humidityState.value}${humidityState.unit}` : '',
      power: powerState ? `${powerState.value}${powerState.unit}` : '',
    };
  }

  static async getConfigElement() {
    // Trigger lazy loading of the config element from the built-in HA stack card
    const stackCard = document.createElement('hui-vertical-stack-card');
    if ('getConfigElement' in stackCard.constructor && stackCard.constructor.getConfigElement instanceof Function) {
      stackCard.constructor.getConfigElement();
    }
    return document.createElement(editorCardName);
  }

  public static getStubConfig = getDefaultAreaCardConfig;

  private getAspectRatio(aspectRatio = '') {
    let [width, height] = aspectRatio.split(/[:/]/).map(Number);
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
      width = 2;
      height = 1;
    }

    return width / height;
  }

  protected render() {
    const { area, config } = this;
    if (!area || !config) return nothing;

    return html`
      <ha-card class="go-area-card">
        <div class="picture"></div>
        ${isDev ? html`<div class="dev-mode">🛠️ DEV MODE</div>` : ''}
        <div class="content${this.config?.navigation_path ? ' clickable' : ''}" @click=${this.navigate}>
          ${this.renderTopCards()}
          <div class="bottom">
            <div class="left">
              <div class="name">${area.name}</div>
              ${this.renderSensors()}
            </div>
            ${this.renderSideCards()}
          </div>
        </div>
      </ha-card>
      ${this.renderDynamicStyles(area, config)}
    `;
  }

  protected renderSensors() {
    const { temperature, humidity, power } = this.sensorStates;
    if (!temperature && !humidity && !power) return nothing;

    return html`
      <div class="sensors">
        ${temperature ? html`<div><ha-icon icon="mdi:thermometer"></ha-icon>${temperature}</div>` : ''}
        ${humidity ? html`<div><ha-icon icon="mdi:water-percent"></ha-icon>${humidity}</div>` : ''}
        ${power ? html`<div><ha-icon icon="mdi:flash"></ha-icon>${power}</div>` : ''}
      </div>
    `;
  }

  protected renderTopCards() {
    if (!this.config?.top_cards?.length) return nothing;
    return html`<hui-vertical-stack-card class="top-cards" .hass=${this._hass} @click=${this.stopPropagation} />`;
  }

  protected renderSideCards() {
    if (!this.config?.side_cards?.length) return nothing;
    return html`<hui-vertical-stack-card class="side-cards" .hass=${this._hass} @click=${this.stopPropagation} />`;
  }

  protected firstUpdated() {
    if (this.config?.top_cards) {
      const topCardsElement = this.shadowRoot?.querySelector('.top-cards') as HuiStackCard;
      topCardsElement?.setConfig({ cards: this.config.top_cards, type: 'vertical-stack' });
    }

    if (this.config?.side_cards) {
      const sideCardsElement = this.shadowRoot?.querySelector('.side-cards') as HuiStackCard;
      sideCardsElement?.setConfig({ cards: this.config.side_cards, type: 'vertical-stack' });
    }
  }

  private stopPropagation(event: PointerEvent | TouchEvent) {
    event.stopPropagation();
  }

  private async navigate(event: PointerEvent | TouchEvent) {
    if (this.config?.navigation_path) {
      event.stopPropagation();
      try {
        await navigate(this.config.navigation_path);
      } catch (err) {
        logger.error('Navigation error:', err);
      }
    }
  }

  private renderDynamicStyles(area: AreaRegistryEntry, config: AreaCardConfig) {
    return html`
      <style>
        .go-area-card {
          --area-picture: url('${area.picture}');
          --area-aspect-ratio-padding: ${(100 / this.getAspectRatio(config.aspect_ratio)).toFixed(2)}%;
        }
      </style>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      .go-area-card {
        overflow: hidden;
        position: relative;

        .picture {
          width: 100%;
          background-size: cover;
          background-position: center;
          background-image: var(--area-picture);
          padding-top: var(--area-aspect-ratio-padding);
        }

        .content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          /* TODO: Do not add bright top fade if no chips are present */
          background:
            linear-gradient(0, rgba(33, 33, 33, 0.9) 0%, rgba(33, 33, 33, 0) 45%),
            linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 45%);
          padding: 16px;
          box-sizing: border-box;
          gap: 8px;
        }

        .content.clickable {
          cursor: pointer;
        }

        .top-cards,
        .side-cards {
          overflow: auto;
          /* Some cards add unnecessary margins around itself for spacing between elements, so we need to hide scrollbars */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox, Safari 18.2+, Chromium 121+ */
        }

        .top-cards::-webkit-scrollbar,
        .side-cards::-webkit-scrollbar {
          display: none; /* Older Safari and Chromium */
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: auto;
          width: 100%;
          gap: 8px;

          .left {
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            gap: 8px;
          }
        }

        .name {
          color: #fff;
          font-size: var(--ha-font-size-2xl);
          line-height: 1;
        }

        .sensors {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #e3e3e3;
          opacity: 0.6;
          font-size: var(--ha-font-size-l);
          --mdc-icon-size: 24px;
          margin-left: -6px;

          > div {
            display: flex;
            align-items: center;
            gap: 2px;
          }

          > div[hidden] {
            display: none;
          }
        }

        .dev-mode {
          position: absolute;
          top: 0;
          right: 0;
          background-color: rgb(180, 30, 30);
          color: #fff;
          padding: 2px 8px;
          border-bottom-left-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          z-index: 1;
        }
      }
    `;
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: areaCardName,
  name: 'Go Area Card',
  preview: true, // Optional - defaults to false
  description: 'A custom card for displaying an area!', // Optional
  documentationURL: 'https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card', // Adds a help link in the frontend card editor
});
