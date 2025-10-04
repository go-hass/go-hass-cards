import type {
  LovelaceLayoutOptions,
  AreaRegistryEntry,
  LovelaceCard,
  LovelaceConfigForm,
  LovelaceCardConfig,
  HomeAssistant,
  HuiCard,
} from "../types";
import { logger } from "../utils/logger";
import { createSensorManager, findSensorStates, type GoCard, type GoCardSensors } from "../utils/sensors";

class HomeAssistantAreaCard extends HTMLElement implements LovelaceCard, GoCard {
  preview?: boolean | undefined;
  layout?: string | undefined;
  connectedWhileHidden?: boolean | undefined;
  getLayoutOptions?(): LovelaceLayoutOptions {
    throw new Error("Method not implemented.");
  }
  content: HTMLDivElement | null = null;
  areaId: string | undefined;
  area: AreaRegistryEntry | undefined;
  config: AreaCardConfig | undefined;
  prevState: string = "";
  _hass: HomeAssistant | undefined;
  entities: HomeAssistant['entities'] | undefined;
  sensors: GoCardSensors | undefined;

  // Whenever the state changes, a new `hass` object is set. Use this to
  // update your content.
  set hass(hass: HomeAssistant) {
    this._hass = hass;
    const config = this.config;
    if (!config) {
      console.error("No config provided!");
      return;
    }
    if (!this.area || config.area !== this.areaId) {
      this.areaId = config.area;
      this.area = Object.values(hass.areas).find(area => area.area_id === config.area);
      logger.log("area", this.area);
    }
    if (!this.area) {
      console.error("Area not found!");
      return;
    }

    // Initialize the content if it's not there yet.
    if (!this.content) {
      // TODO: Do not add bright top fade if no chips are present
      this.innerHTML = `
        <ha-card style="overflow: hidden; position: relative;">
          <div style="width: 100%; background-image: url('${this.area.picture}'); background-size: cover; background-position: center; padding-top: ${(100 / this.getAspectRatio(config.aspect_ratio)).toFixed(2)}%;">
          </div>
          <div class="area-card-content" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; background: linear-gradient(0,rgba(33,33,33,.9) 0%,rgba(33,33,33,0) 45%),linear-gradient(rgba(255,255,255,0.1) 0%,rgba(255,255,255,0) 45%); padding: 16px; box-sizing: border-box;"></div>
        </ha-card>
      `;
      this.content = this.querySelector(".area-card-content") as HTMLDivElement;
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

    const humidityState = this.sensors.humidity.getState();
    const temperatureState = this.sensors.temperature.getState();
    const powerState = this.sensors.power.getState();

    // logger.log("this.sensors", this.sensors);
    // logger.log("humidityState", humidityState);
    // logger.log("temperatureState", temperatureState);
    // logger.log("powerState", powerState);

    // logger.log("humidityState", humidityState);
    // logger.log("temperatureState", temperatureState);

    const newSate = [
      temperatureState && `<ha-icon icon="mdi:thermometer"></ha-icon> ${temperatureState.value} ${temperatureState.unit}`,
      humidityState && `<ha-icon icon="mdi:water-percent"></ha-icon> ${humidityState.value}${humidityState.unit}`,
      powerState && `<ha-icon icon="mdi:flash"></ha-icon> ${powerState.value}${powerState.unit}`,
    ].filter(Boolean).join('');

    if (newSate !== this.prevState) {
      this.prevState = newSate;
      this.content.innerHTML = `
        <div style="margin-top: auto; display: flex; flex-direction: column; gap: 8px;">
          <div style="color: #fff; font-size: var(--ha-font-size-2xl); line-height: 1;">
            ${this.area.name}
          </div>
          <div style="display: flex; align-items: center; gap: 4px; color: #e3e3e3; opacity: 0.6; font-size: var(--ha-font-size-l); --mdc-icon-size: 24px; margin-left: -6px;">
            ${newSate}
          </div>
        </div>
      `;
      
      if (config.chips) {
        const element = document.createElement("hui-card") as HuiCard;
        element.style.margin = '0';
        element.style.padding = '0';
        element.hass = hass;
        element.config = {
          type: "custom:mushroom-chips-card",
          chips: config.chips,
        }
        this.content.prepend(element);
      }
    }
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
        // {
        //   name: "chips",
        // }
      ],
      computeLabel: (schema) => {
        if (schema.name === "icon") return "Special Icon";
        return undefined;
      },
      computeHelper: (schema) => {
        switch (schema.name) {
          case "entity":
            return "This text describes the function of the entity selector";
          case "unit":
            return "The unit of measurement for this card";
        }
        return undefined;
      },
      assertConfig: (config) => {
        if (config.other_option) {
          throw new Error("'other_option' is unexpected.");
        }
      },
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
}

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


type AreaCardConfig = LovelaceCardConfig & {
  area: string;
  aspect_ratio?: string;
}