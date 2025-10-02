import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import { logger } from "./logger";

export function createSensorManager(this: GoCard, type: keyof GoCardSensors, sensorStates: HassEntity[]) {
  const entityId = sensorStates.find(state => state.attributes.device_class === type)?.entity_id;
  return {
    id: entityId,
    getState: () => {
      const hassEntity = entityId ? this._hass?.states[entityId] : undefined;
      if (hassEntity?.state !== 'unavailable' && hassEntity?.state !== 'unknown') {
        return hassEntity;
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

export interface GoCard {
  _hass: HomeAssistant | undefined;
  entities: HomeAssistant['entities'] | undefined;
  sensors: GoCardSensors | undefined;
}
