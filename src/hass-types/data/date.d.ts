import type { HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare const stateToIsoDateString: (entityState: HassEntityBase) => string;
export declare const setDateValue: (hass: HomeAssistant, entityId: string, date?: string | undefined) => void;
