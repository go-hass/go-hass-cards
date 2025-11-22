import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
export type LawnMowerEntityState = "paused" | "mowing" | "returning" | "docked" | "error";
export declare const enum LawnMowerEntityFeature {
    START_MOWING = 1,
    PAUSE = 2,
    DOCK = 4
}
interface LawnMowerEntityAttributes extends HassEntityAttributeBase, Record<string, any> {
}
export interface LawnMowerEntity extends HassEntityBase {
    attributes: LawnMowerEntityAttributes;
}
export declare function canStartMowing(stateObj: LawnMowerEntity): boolean;
export declare function canPause(stateObj: LawnMowerEntity): boolean;
export declare function canDock(stateObj: LawnMowerEntity): boolean;
export {};
