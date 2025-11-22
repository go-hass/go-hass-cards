import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare const enum CoverEntityFeature {
    OPEN = 1,
    CLOSE = 2,
    SET_POSITION = 4,
    STOP = 8,
    OPEN_TILT = 16,
    CLOSE_TILT = 32,
    STOP_TILT = 64,
    SET_TILT_POSITION = 128
}
export declare function isFullyOpen(stateObj: CoverEntity): boolean;
export declare function isFullyClosed(stateObj: CoverEntity): boolean;
export declare function isFullyOpenTilt(stateObj: CoverEntity): boolean;
export declare function isFullyClosedTilt(stateObj: CoverEntity): boolean;
export declare function isOpening(stateObj: CoverEntity): boolean;
export declare function isClosing(stateObj: CoverEntity): boolean;
export declare function isTiltOnly(stateObj: CoverEntity): boolean;
export declare function canOpen(stateObj: CoverEntity): boolean;
export declare function canClose(stateObj: CoverEntity): boolean;
export declare function canStop(stateObj: CoverEntity): boolean;
export declare function canOpenTilt(stateObj: CoverEntity): boolean;
export declare function canCloseTilt(stateObj: CoverEntity): boolean;
export declare function canStopTilt(stateObj: CoverEntity): boolean;
interface CoverEntityAttributes extends HassEntityAttributeBase {
    current_position?: number;
    current_tilt_position?: number;
}
export interface CoverEntity extends HassEntityBase {
    attributes: CoverEntityAttributes;
}
export declare function computeCoverPositionStateDisplay(stateObj: CoverEntity, hass: HomeAssistant, position?: number): string;
export {};
