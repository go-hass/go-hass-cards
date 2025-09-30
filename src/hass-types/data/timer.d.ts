import type { HassEntity, HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export type TimerEntity = HassEntityBase & {
    attributes: HassEntityAttributeBase & {
        duration: string;
        remaining: string;
        restore: boolean;
    };
};
export interface DurationDict {
    hours?: number | string;
    minutes?: number | string;
    seconds?: number | string;
}
export interface Timer {
    id: string;
    name: string;
    icon?: string;
    duration?: string | number | DurationDict;
    restore?: boolean;
}
export interface TimerMutableParams {
    name: string;
    icon: string;
    duration: string | number | DurationDict;
    restore: boolean;
}
export declare const fetchTimer: (hass: HomeAssistant) => Promise<Timer[]>;
export declare const createTimer: (hass: HomeAssistant, values: TimerMutableParams) => Promise<Timer>;
export declare const updateTimer: (hass: HomeAssistant, id: string, updates: Partial<TimerMutableParams>) => Promise<Timer>;
export declare const deleteTimer: (hass: HomeAssistant, id: string) => Promise<unknown>;
export declare const timerTimeRemaining: (stateObj: HassEntity) => undefined | number;
export declare const computeDisplayTimer: (hass: HomeAssistant, stateObj: HassEntity, timeRemaining?: number) => string | null;
