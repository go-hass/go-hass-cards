import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
export type HumidifierState = "off" | "on";
export type HumidifierAction = "off" | "idle" | "humidifying" | "drying";
export type HumidifierEntity = HassEntityBase & {
    attributes: HassEntityAttributeBase & {
        humidity?: number;
        current_humidity?: number;
        min_humidity?: number;
        max_humidity?: number;
        mode?: string;
        action?: HumidifierAction;
        available_modes?: string[];
    };
};
export declare const enum HumidifierEntityFeature {
    MODES = 1
}
export declare const enum HumidifierEntityDeviceClass {
    HUMIDIFIER = "humidifier",
    DEHUMIDIFIER = "dehumidifier"
}
export declare const HUMIDIFIER_ACTION_MODE: Record<HumidifierAction, HumidifierState>;
