import { customElement, property, state } from 'lit/decorators.js';
import { css, html, LitElement, nothing, type CSSResultGroup } from 'lit';
import type { HASSDomEvent } from '@hass/common/dom/fire_event';
import type { LovelaceConfig } from '@hass/data/lovelace/config/types';
import type { EntitySelector, SelectSelector } from '@hass/data/selector';
import type { StackCardConfig } from '@hass/panels/lovelace/cards/types';
import type { ConfigChangedEvent } from '@hass/panels/lovelace/editor/hui-element-editor';
import type { LovelaceCardEditor } from '@hass/panels/lovelace/types';
import type { HomeAssistant } from '@hass/types';
import { findSensorStates, getSensorEntityIds, type SensorType } from '@/utils/sensors';
import { editorCardName, getDefaultAreaCardConfig, resolveConfigWithDeprecations } from './utils';
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
  },
};

function getSensorSelectorSchema(deviceClass: string): EntitySelector {
  return {
    entity: {
      multiple: true,
      filter: { domain: ['sensor'], device_class: [deviceClass] },
    },
  };
}

const temperatureSelectorSchema = getSensorSelectorSchema('temperature');
const humiditySelectorSchema = getSensorSelectorSchema('humidity');
const powerSelectorSchema = getSensorSelectorSchema('power');

const cards = [
  {
    id: 'settings',
    label: 'Settings',
    icon: 'mdi:cog-outline',
  },
  {
    id: 'top-cards',
    label: 'Top',
    icon: 'mdi:dock-top',
  },
  {
    id: 'side-cards',
    label: 'Side',
    icon: 'mdi:dock-right',
  },
  {
    id: 'sensors',
    label: 'Sensors',
    icon: 'mdi:home-thermometer-outline',
  },
] as const;

@customElement(editorCardName)
export class HomeAssistantAreaCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public lovelace?: LovelaceConfig;

  @state() public config: AreaCardConfig | undefined;
  @state() protected _selectedCard: (typeof cards)[number] = cards[0];

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
                </ha-tab-group-tab>`,
            )}
          </ha-tab-group>
        </div>
        ${this.renderContent()}
      </div>
    `;
  }

  protected renderContent() {
    const config = { ...getDefaultAreaCardConfig(this.hass), ...this.config };

    if (this._selectedCard.id === 'settings') {
      const area = this.hass.areas[this.config?.area || ''];
      return html`
        <div class="settings card-content flex">
          <div>
            <ha-area-picker
              label="Area"
              placeholder="E.g. Bedroom"
              .hass=${this.hass}
              .value=${config.area}
              @value-changed=${this.updateArea}
            ></ha-area-picker>
          </div>
          <div>
            <ha-textfield
              label="Aspect Ratio"
              placeholder="16:9"
              .value=${config.aspect_ratio}
              @input=${this.updateAspectRatio}
            ></ha-textfield>
          </div>
          <div>
            <ha-textfield
              label="Navigation Path"
              placeholder="${area?.name?.toLowerCase().replace(/\s/g, '-') || ''}"
              .value=${config.navigation_path || ''}
              @input=${this.updateNavigationPath}
            ></ha-textfield>
          </div>
        </div>
      `;
    }

    if (this._selectedCard.id === 'sensors') {
      return this.renderSensorSelector();
    }

    return html`
      <hui-stack-card-editor
        @config-changed=${this._selectedCard.id === 'top-cards' ? this.updateTopCard : this.updateSideCard}
        ._config=${{ cards: this._selectedCard.id === 'top-cards' ? config.top_cards : config.side_cards }}
        .hass=${this.hass}
        .lovelace=${this.lovelace}
        .firstUpdated=${this.cardEditorUpdated}
      ></hui-stack-card-editor>
    `;
  }

  protected renderSensorSelector() {
    const config = this.config;
    const area = this.hass.areas[config?.area || ''];
    const sensorEntities = config?.sensor_entities || {};
    const sensorClasses = config?.sensor_classes || [];

    return html`
      <div class="sensors card-content flex">
        <ha-selector
          label="Sensor Classes"
          name="sensor_classes"
          .hass=${this.hass}
          .value=${sensorClasses}
          .selector=${sensorClassesSchema}
          @value-changed=${this.updateSensorClasses}
        ></ha-selector>
        <p>
          Select the sensors you want to include in the area card sensor value calculations. All ${area?.name || 'Area'}
          sensors are used by default unless you select specific sensors in the selectors below.
        </p>
        ${sensorClasses.includes('temperature')
          ? html`
              <div>
                <label>
                  <ha-icon icon="mdi:thermometer"></ha-icon>
                  Temperature Sensors
                  <div class="right">
                    <ha-button name="temperature" variant="neutral" size="small" @click=${this.resetSensorEntities}>
                      <ha-icon slot="start" icon="mdi:refresh"></ha-icon>
                      Reset
                    </ha-button>
                  </div>
                </label>
                <ha-selector
                  name="temperature"
                  .hass=${this.hass}
                  .selector=${temperatureSelectorSchema}
                  .value=${sensorEntities.temperature?.entities}
                  @value-changed=${this.updateSensorEntities}
                ></ha-selector>
              </div>
            `
          : nothing}
        ${sensorClasses.includes('humidity')
          ? html`
              <div>
                <label>
                  <ha-icon icon="mdi:water-percent"></ha-icon>
                  Humidity Sensors
                  <div class="right">
                    <ha-button name="humidity" variant="neutral" size="small" @click=${this.resetSensorEntities}>
                      <ha-icon slot="start" icon="mdi:refresh"></ha-icon>
                      Reset
                    </ha-button>
                  </div>
                </label>
                <ha-selector
                  name="humidity"
                  .hass=${this.hass}
                  .selector=${humiditySelectorSchema}
                  .value=${sensorEntities.humidity?.entities}
                  @value-changed=${this.updateSensorEntities}
                ></ha-selector>
              </div>
            `
          : nothing}
        ${sensorClasses.includes('power')
          ? html`
              <div>
                <label>
                  <ha-icon icon="mdi:flash"></ha-icon>
                  Power Sensors
                  <div class="right">
                    <ha-button name="power" variant="neutral" size="small" @click=${this.resetSensorEntities}>
                      <ha-icon slot="start" icon="mdi:refresh"></ha-icon>
                      Reset
                    </ha-button>
                  </div>
                </label>
                <ha-selector
                  name="power"
                  .hass=${this.hass}
                  .selector=${powerSelectorSchema}
                  .value=${sensorEntities.power?.entities}
                  @value-changed=${this.updateSensorEntities}
                ></ha-selector>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private resetSensorEntities(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const name = target.name as SensorType;
    this.configChanged({
      sensor_entities: {
        ...this.config?.sensor_entities,
        [name]: {
          entities: getSensorEntityIds(findSensorStates(this.hass, this.config?.area || ''), name),
        },
      },
    });
  }

  private updateSensorEntities(ev: SimpleInputEvent<string[]>) {
    const target = ev.target as HTMLInputElement;
    const name = target.name as SensorType;
    this.configChanged({
      sensor_entities: {
        ...this.config?.sensor_entities,
        [name]: {
          entities: ev.detail.value,
        },
      },
    });
  }

  protected cardEditorUpdated() {
    // We do not need the title, so there's no need to show it
    const titleForm = this.shadowRoot?.querySelector('ha-form');
    if (titleForm) {
      titleForm.style.display = 'none';
    }
  }

  protected _handleSelectedCard(ev: CustomEvent) {
    const card = cards.find((card) => card.id === ev.detail.name)!;
    if (!card) {
      throw new Error(`Card ${ev.detail.name} not found`);
    }

    this._selectedCard = card;
  }

  private updateTopCard(ev: HASSDomEvent<ConfigChangedEvent<StackCardConfig>>) {
    ev.stopPropagation();
    this.configChanged({ top_cards: ev.detail.config.cards });
  }

  private updateSideCard(ev: HASSDomEvent<ConfigChangedEvent<StackCardConfig>>) {
    ev.stopPropagation();
    this.configChanged({ side_cards: ev.detail.config.cards });
  }

  private updateArea(ev: SimpleInputEvent) {
    this.configChanged({ area: ev.detail.value });
  }

  private updateAspectRatio(ev: InputEvent) {
    const target = ev.target as HTMLInputElement;
    this.configChanged({ aspect_ratio: target.value });
  }

  private updateNavigationPath(ev: InputEvent) {
    const target = ev.target as HTMLInputElement;
    this.configChanged({ navigation_path: target.value || undefined });
  }

  private updateSensorClasses(ev: SimpleInputEvent<SensorType[]>) {
    this.configChanged({ sensor_classes: ev.detail.value });
  }

  setConfig(passedConfig: AreaCardConfig) {
    const config = resolveConfigWithDeprecations(passedConfig);
    const sensorEntities = config.sensor_entities || {};
    const sensorClasses = config.sensor_classes || [];

    // Logic to resolve default available sensors if not specified
    if (!config.sensor_classes || !sensorEntities.temperature || !sensorEntities.humidity || !sensorEntities.power) {
      const sensorStates = findSensorStates(this.hass, config.area || '');
      sensorEntities.temperature = sensorEntities.temperature || {
        entities: getSensorEntityIds(sensorStates, 'temperature'),
      };
      sensorEntities.humidity = sensorEntities.humidity || {
        entities: getSensorEntityIds(sensorStates, 'humidity'),
      };
      sensorEntities.power = sensorEntities.power || {
        entities: getSensorEntityIds(sensorStates, 'power'),
      };

      if (!config?.sensor_classes) {
        if (sensorEntities.temperature.entities.length > 0) {
          sensorClasses.push('temperature');
        }
        if (sensorEntities.humidity.entities.length > 0) {
          sensorClasses.push('humidity');
        }
        if (sensorEntities.power.entities.length > 0) {
          sensorClasses.push('power');
        }
      }
    }

    this.config = {
      ...config,
      sensor_entities: sensorEntities,
      sensor_classes: sensorClasses,
    };
  }

  configChanged(config: Partial<AreaCardConfig>) {
    const event = new CustomEvent('config-changed', {
      bubbles: true,
      composed: true,
      detail: { config: resolveConfigWithDeprecations({ ...this.config!, ...config }) },
    });
    this.dispatchEvent(event);
  }

  static get styles(): CSSResultGroup {
    return css`
      .go-area-card-editor {
        .flex {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card-content {
          margin-top: 16px;

          > div > * {
            width: 100%;
          }
        }

        .sensors {
          label {
            display: flex;
            align-items: center;

            .right {
              display: flex;
              align-items: center;
              margin-left: auto;
              gap: 4px;
            }
          }
        }
      }
    `;
  }
}

type SimpleInputEvent<Value = string> = CustomEvent<{ value: Value }>;
