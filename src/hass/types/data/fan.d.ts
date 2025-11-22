import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare const enum FanEntityFeature {
    SET_SPEED = 1,
    OSCILLATE = 2,
    DIRECTION = 4,
    PRESET_MODE = 8,
    TURN_OFF = 16,
    TURN_ON = 32
}
interface FanEntityAttributes extends HassEntityAttributeBase {
    direction?: string;
    oscillating?: boolean;
    percentage?: number;
    percentage_step?: number;
    preset_mode?: string;
    preset_modes?: string[];
}
export interface FanEntity extends HassEntityBase {
    attributes: FanEntityAttributes;
}
export type FanDirection = "forward" | "reverse";
export type FanSpeed = "off" | "low" | "medium" | "high" | "on";
export declare const FAN_SPEEDS: Partial<Record<number, FanSpeed[]>>;
export declare function fanPercentageToSpeed(stateObj: FanEntity, value: number): FanSpeed;
export declare function fanSpeedToPercentage(stateObj: FanEntity, speed: FanSpeed): number;
export declare function computeFanSpeedCount(stateObj: FanEntity): number;
export declare function computeFanSpeedIcon(stateObj: FanEntity, speed: FanSpeed): string;
export declare const FAN_SPEED_COUNT_MAX_FOR_BUTTONS = 4;
export declare function computeFanSpeedStateDisplay(stateObj: FanEntity, hass: HomeAssistant, speed?: number): string;
export {};
