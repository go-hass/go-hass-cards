import type { HomeAssistant } from "../types";

export function createSensorState(this: GoCard, entityId?: string) {
  return {
    id: entityId,
    getState: () => entityId ? this._hass?.states[entityId] : undefined,
  }
}

export interface GoCardSensors {
  humidity: ReturnType<typeof createSensorState>;
  temperature: ReturnType<typeof createSensorState>;
}

export interface GoCard {
  _hass: HomeAssistant | undefined;
  entities: HomeAssistant['entities'] | undefined;
  sensors: GoCardSensors | undefined;
}
