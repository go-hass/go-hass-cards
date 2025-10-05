import { customElement, property, state } from 'lit/decorators.js'
import { css, html, LitElement, type CSSResultGroup } from 'lit';
import type { HomeAssistant, LovelaceCardEditor } from "../../types";
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

@customElement(editorCardName)
export class HomeAssistantAreaCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() public config: AreaCardConfig | undefined;

  protected render() {
    const config = { ...getDefaultAreaCardConfig(this.hass), ...this.config }

    return html`
      <div class="go-area-card-editor">
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
        display: flex;
        flex-direction: column;
        gap: 16px;

        > div > * {
          width: 100%;
        }
      }
    `;
  }
}

type SimpleInputEvent<Value = string> = CustomEvent<{ value: Value }>;
