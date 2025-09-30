import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare const enum ValveEntityFeature {
    OPEN = 1,
    CLOSE = 2,
    SET_POSITION = 4,
    STOP = 8
}
export declare function isFullyOpen(stateObj: ValveEntity): boolean;
export declare function isFullyClosed(stateObj: ValveEntity): boolean;
export declare function isOpening(stateObj: ValveEntity): boolean;
export declare function isClosing(stateObj: ValveEntity): boolean;
export declare function canOpen(stateObj: ValveEntity): boolean;
export declare function canClose(stateObj: ValveEntity): boolean;
export declare function canStop(stateObj: ValveEntity): boolean;
interface ValveEntityAttributes extends HassEntityAttributeBase {
    current_position?: number;
    position?: number;
}
export interface ValveEntity extends HassEntityBase {
    attributes: ValveEntityAttributes;
}
export declare function computeValvePositionStateDisplay(stateObj: ValveEntity, hass: HomeAssistant, position?: number): string;
export {};
