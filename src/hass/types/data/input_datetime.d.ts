import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export interface InputDateTime {
    id: string;
    name: string;
    icon?: string;
    initial?: string;
    has_time: boolean;
    has_date: boolean;
}
export interface InputDateTimeMutableParams {
    name: string;
    icon: string;
    initial: string;
    has_time: boolean;
    has_date: boolean;
}
export declare const stateToIsoDateString: (entityState: HassEntity) => string;
export declare const setInputDateTimeValue: (hass: HomeAssistant, entityId: string, time?: string | undefined, date?: string | undefined) => void;
export declare const fetchInputDateTime: (hass: HomeAssistant) => Promise<InputDateTime[]>;
export declare const createInputDateTime: (hass: HomeAssistant, values: InputDateTimeMutableParams) => Promise<InputDateTime>;
export declare const updateInputDateTime: (hass: HomeAssistant, id: string, updates: Partial<InputDateTimeMutableParams>) => Promise<InputDateTime>;
export declare const deleteInputDateTime: (hass: HomeAssistant, id: string) => Promise<unknown>;
