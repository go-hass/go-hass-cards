import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant, LovelaceCardConfig } from "../types";
import { logger } from "./logger";

const defaultSensorUnits: Record<SensorType, string> = {
  temperature: '°C',
  humidity: '%',
  power: 'W',
}

export function createSensorManager(this: GoCard, type: SensorType, sensorStates: HassEntity[], aggregation: 'sum' | 'average' = 'average') {
  if (!this.config?.sensor_classes?.includes(type)) {
    return { entityIds: [], getState: () => undefined };
  }

  const entityIds = sensorStates.filter(state => state.attributes.device_class === type).map(state => state.entity_id);

  return {
    entityIds,
    getState: () => {
      const hassEntities = entityIds.map(entityId => this._hass?.states[entityId]).filter(Boolean).filter(it => it.state !== 'unavailable' && it.state !== 'unknown');
      if (hassEntities.length > 0) {
        const totalValue = hassEntities.reduce((acc, hassEntity) => acc + Number(hassEntity.state), 0);
        const value = aggregation === 'sum' ? totalValue : totalValue / hassEntities.length;

        return {
          unit: hassEntities.find(it => !!it.attributes.unit_of_measurement)?.attributes.unit_of_measurement ?? defaultSensorUnits[type],
          value,
        }
      }
    },
  }
}

export function findSensorStates(hass: HomeAssistant, areaId: string) {
  const devices = Object.values(hass.devices).filter(device => device.area_id === areaId);
  const deviceIds = new Set(devices.map(device => device.id));
  const entities = Object.values(hass.entities).filter(entity => entity.area_id === areaId || entity.device_id && deviceIds.has(entity.device_id));
  const entityIds = new Set(entities.map(entity => entity.entity_id));
  const states = Object.values(hass.states).filter(state => entityIds.has(state.entity_id));
  const sensorStates = states.filter(state => state.entity_id.startsWith('sensor.'));

  logger.log("entities", entities);
  logger.log("devices", devices);
  logger.log("states", states);
  logger.log("sensorStates", sensorStates);

  return sensorStates;
}

export interface GoCardSensors {
  temperature: ReturnType<typeof createSensorManager>;
  humidity: ReturnType<typeof createSensorManager>;
  power: ReturnType<typeof createSensorManager>;
}

type SensorType = keyof GoCardSensors;

export interface GoCard {
  config: AreaCardConfig | undefined;
  _hass: HomeAssistant | undefined;
  entities: HomeAssistant['entities'] | undefined;
  sensors: GoCardSensors | undefined;
}


export type AreaCardConfig = LovelaceCardConfig & {
  area: string;
  aspect_ratio?: string;
  sensor_classes?: string[];
}