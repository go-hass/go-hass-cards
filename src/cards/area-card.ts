import type {
  LovelaceLayoutOptions,
  AreaRegistryEntry,
  LovelaceCard,
  LovelaceConfigForm,
  HomeAssistant,
  HuiCard,
} from "../types";
import { logger } from "../utils/logger";
import { createSensorManager, findSensorStates, type AreaCardConfig, type GoCard, type GoCardSensors } from "../utils/sensors";

class HomeAssistantAreaCard extends HTMLElement implements LovelaceCard, GoCard {
  preview?: boolean | undefined;
  layout?: string | undefined;
  connectedWhileHidden?: boolean | undefined;
  getLayoutOptions?(): LovelaceLayoutOptions {
    throw new Error("Method not implemented.");
  }
  content: HTMLDivElement | null = null;
  area: AreaRegistryEntry | undefined;
  config: AreaCardConfig | undefined;
  prevState: string = "";
  _hass: HomeAssistant | undefined;
  entities: HomeAssistant['entities'] | undefined;
  sensors: GoCardSensors | undefined;
  components: ReturnType<typeof this.createComponents> | undefined;

  // Whenever the state changes, a new `hass` object is set. Use this to update your content.
  set hass(hass: HomeAssistant) {
    this._hass = hass;
    const config = this.config;
    if (!config) {
      console.error("No config provided!");
      return;
    }

    if (!this.area) {
      this.area = Object.values(hass.areas).find(area => area.area_id === config.area);
      logger.log("area", this.area);
      
      if (!this.area) {
        console.error("Area not found!");
        return;
      }
    }

    // Initialize the content if it's not there yet.
    if (!this.components) {
      this.components = this.createComponents(config, this.area);
      logger.log("hass", hass);
      logger.log("area", this.area);
    }

    if (!this.sensors) {
      const sensorStates = findSensorStates(hass, this.area.area_id);
      this.sensors = {
        humidity: createSensorManager.call(this, 'humidity', sensorStates),
        temperature: createSensorManager.call(this, 'temperature', sensorStates),
        power: createSensorManager.call(this, 'power', sensorStates, 'sum'),
      }
    }

    this.updateSensors(this.sensors, this.components.sensors);
  }

  // The user supplied configuration. Throw an exception and Home Assistant
  // will render an error card.
  setConfig(config: AreaCardConfig) {
    if (!config.area) {
      throw new Error("You need to specify an area");
    }
    this.config = {
      aspect_ratio: '2/1',
      ...config
    };

    logger.log("config", config);
    logger.log("this.hass", this.hass);
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

  static getConfigForm(): LovelaceConfigForm {
    return {
      schema: [
        { name: "area", required: true, selector: { area: {} } },
        {
          name: "aspect_ratio",
          default: "2/1",
          title: "Aspect Ratio",
          selector: { text: {} },
        },
        {
          name: "sensor_classes",
          selector: {
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
          },
        },
      ],
    };
  }

  private getAspectRatio(aspectRatio = '') {
    let [width, height] = aspectRatio.split(/[:/]/).map(Number);
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
      width = 2;
      height = 1;
    }

    return width / height;
  }

  private createComponents(config: AreaCardConfig, area: AreaRegistryEntry) {
    this.innerHTML = `
      <ha-card class="go-area-card">
        <div class="picture"></div>
        <div class="content">
          <div class="inner">
            <div class="name">${area.name}</div>
            <div class="sensors">
              <div class="temperature" hidden>
                <ha-icon icon="mdi:thermometer"></ha-icon>
                <span></span>
              </div>
              <div class="humidity" hidden>
                <ha-icon icon="mdi:water-percent"></ha-icon>
                <span></span>
              </div>
              <div class="power" hidden>
                <ha-icon icon="mdi:flash"></ha-icon>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <style>
          .go-area-card {
            overflow: hidden;
            position: relative;

            .picture {
              width: 100%;
              background-size: cover;
              background-position: center;
              background-image: url('${area.picture}');
              padding-top: ${(100 / this.getAspectRatio(config.aspect_ratio)).toFixed(2)}%;
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
              background: linear-gradient(0,rgba(33,33,33,.9) 0%,rgba(33,33,33,0) 45%),linear-gradient(rgba(255,255,255,0.1) 0%,rgba(255,255,255,0) 45%);
              padding: 16px;
              box-sizing: border-box;
            }

            .inner {
              display: flex;
              flex-direction: column;
              gap: 8px;
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
          }
        </style>
      </ha-card>
    `;

    const components = {
      style: document.createElement("style"),
      picture: this.querySelector(".picture") as HTMLDivElement,
      content: this.querySelector(".content") as HTMLDivElement,
      innerContent: this.querySelector(".inner") as HTMLDivElement,
      name: this.querySelector(".name") as HTMLDivElement,
      sensors: {
        temperature: this.querySelector(".temperature span") as HTMLDivElement & { parentElement: HTMLDivElement },
        humidity: this.querySelector(".humidity span") as HTMLDivElement & { parentElement: HTMLDivElement },
        power: this.querySelector(".power span") as HTMLDivElement & { parentElement: HTMLDivElement },
      },
    }

    if (config.chips) {
      const element = document.createElement("hui-card") as HuiCard;
      element.style.margin = '0';
      element.style.padding = '0';
      element.hass = this._hass;
      element.config = {
        type: "custom:mushroom-chips-card",
        chips: config.chips,
      }
      components.content.prepend(element);
    }

    return components;
  }

  private updateSensors(sensors: GoCardSensors, components: Components['sensors']) {
    const humidityState = sensors.humidity.getState();
    const temperatureState = sensors.temperature.getState();
    const powerState = sensors.power.getState();

    if (temperatureState) {
      const temperature = `${temperatureState.value} ${temperatureState.unit}`;
      if (temperature !== components.temperature.textContent) {
        components.temperature.textContent = temperature;
        components.temperature.parentElement.hidden = false;
      }
    } else {
      components.temperature.parentElement.hidden = true;
    }
    
    if (humidityState) {
      const humidity = `${humidityState.value}${humidityState.unit}`;
      if (humidity !== components.humidity.textContent) {
        components.humidity.textContent = humidity;
        components.humidity.parentElement.hidden = false;
      }
    } else {
      components.humidity.parentElement.hidden = true;
    }

    if (powerState) {
      const power = `${powerState.value}${powerState.unit}`;
      if (power !== components.power.textContent) {
        components.power.textContent = power;
        components.power.parentElement.hidden = false;
      }
    } else {
      components.power.parentElement.hidden = true;
    }
  }
}

type Components = ReturnType<HomeAssistantAreaCard['createComponents']>;

const baseCardName = "go-area-card";
const cardName = customElements.get(baseCardName) ? `${baseCardName}-dev` : baseCardName;

customElements.define(cardName, HomeAssistantAreaCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: cardName,
  name: "Go Area Card",
  preview: false, // Optional - defaults to false
  description: "A custom card for displaying an area!", // Optional
  documentationURL:
    "https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card", // Adds a help link in the frontend card editor
});
