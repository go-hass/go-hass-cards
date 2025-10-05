import { customElement, property, state } from 'lit/decorators.js'
import { css, html, LitElement, type CSSResultGroup } from 'lit';
import type { HomeAssistant, LovelaceCardEditor } from "../../types";
import type { LovelaceConfig } from '../../hass-types/data/lovelace/config/types';
import type { HASSDomEvent } from '../../hass-types/common/dom/fire_event';
import type { ConfigChangedEvent } from '../../hass-types/panels/lovelace/editor/hui-element-editor';
import type { StackCardConfig } from "../../hass-types/panels/lovelace/cards/types";
import type { SelectSelector } from '../../hass-types/data/selector';
import type { SensorType } from '../../utils/sensors';
import { editorCardName, getDefaultAreaCardConfig } from './utils';
import type { AreaCardConfig } from './types';

const sensorClassesSchema: SelectSelector = {
  select: {
    multiple: true,
    mode: 'dropdown',
    options: [
      {
        value: 'temperature',
        label: 'Temperature',
      },
      {
        value: 'humidity',
        label: 'Humidity',
      },
      {
        value: 'power',
        label: 'Power',
      },
    ],
  }
};

const cards = [
  {
    id: 'settings',
    label: 'Settings',
    icon: 'mdi:cog-outline',
  },
  {
    id: 'top-cards',
    label: 'Top Cards',
    icon: 'mdi:dock-top',
  },
  {
    id: 'side-cards',
    label: 'Side Cards',
    icon: 'mdi:dock-right',
  },
] as const;

@customElement(editorCardName)
export class HomeAssistantAreaCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public lovelace?: LovelaceConfig;

  @state() public config: AreaCardConfig | undefined;
  @state() protected _selectedCard: typeof cards[number] = cards[0];

  protected render() {
    return html`
      <div class="go-area-card-editor">
        <div class="toolbar">
          <ha-tab-group @wa-tab-show=${this._handleSelectedCard}>
            ${cards.map(
              (card) =>
                html`<ha-tab-group-tab
                  slot="nav"
                  .id=${card.id}
                  .panel=${card.id}
                  .active=${this._selectedCard === card}
                >
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <ha-icon icon="${card.icon}"></ha-icon>
                    ${card.label}
                  </div>
                </ha-tab-group-tab>`
            )}
          </ha-tab-group>
        </div>
        ${this.renderContent()}
      </div>
    `;
  }


  protected renderContent() {
    const config = { ...getDefaultAreaCardConfig(this.hass), ...this.config }

    if (this._selectedCard.id === 'settings') {
      return html`
        <div class="settings">
          <div>
            <ha-area-picker
              label="Area"
              placeholder="E.g. Bedroom"
              .hass=${this.hass}
              .value=${config.area}
              @value-changed=${this.updateArea}
            />
          </div>
          <div>
            <ha-textfield
              label="Aspect Ratio"
              placeholder="16:9"
              .value=${config.aspect_ratio}
              @input=${this.updateAspectRatio}
            />
          </div>
          <div>
            <ha-selector
              label="Sensor Classes"
              name="sensor_classes"
              .hass=${this.hass}
              .value=${config.sensor_classes}
              .selector=${sensorClassesSchema}
              @value-changed=${this.updateSensorClasses}
            />
          </div>
        </div>
      `;
    }

    return html`
      <hui-stack-card-editor
        @config-changed=${this._selectedCard.id === 'top-cards' ? this.updateTopCard : this.updateSideCard}
        ._config=${this._selectedCard.id === 'top-cards' ? config.top_cards : config.side_cards}
        .hass=${this.hass}
        .lovelace=${this.lovelace}
        .firstUpdated=${this.cardEditorUpdated}
      />
    `;
  }

  protected cardEditorUpdated() {
    // We do not need the title, so there's no need to show it
    const titleForm = this.shadowRoot?.querySelector('ha-form');
    if (titleForm) {
      titleForm.style.display = 'none';
    }
  }

  protected _handleSelectedCard(ev: CustomEvent) {
    const card = cards.find(card => card.id === ev.detail.name)!;
    if (!card) {
      throw new Error(`Card ${ev.detail.name} not found`);
    }

    this._selectedCard = card;
  }

  private updateTopCard(ev: HASSDomEvent<ConfigChangedEvent<StackCardConfig>>) {
    ev.stopPropagation();
    this.configChanged({ top_cards: ev.detail.config });
  }

  private updateSideCard(ev: HASSDomEvent<ConfigChangedEvent<StackCardConfig>>) {
    ev.stopPropagation();
    this.configChanged({ side_cards: ev.detail.config });
  }

  private updateArea(ev: SimpleInputEvent) {
    this.configChanged({ area: ev.detail.value });
  }

  private updateAspectRatio(ev: InputEvent) {
    const target = ev.target as HTMLInputElement;
    this.configChanged({ aspect_ratio: target.value });
  }

  private updateSensorClasses(ev: SimpleInputEvent<SensorType[]>) {
    this.configChanged({ sensor_classes: ev.detail.value });
  }

  setConfig(config: AreaCardConfig) {
    this.config = config;
  }

  configChanged(config: Partial<AreaCardConfig>) {
    const event = new CustomEvent("config-changed", {
      bubbles: true,
      composed: true,
      detail: { config: { ...this.config, ...config } },
    });
    this.dispatchEvent(event);
  }

  static get styles(): CSSResultGroup {
    return css`
      .go-area-card-editor {
        .settings {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
          gap: 16px;

          > div > * {
            width: 100%;
          }
        }
      }
    `;
  }
}

type SimpleInputEvent<Value = string> = CustomEvent<{ value: Value }>;
