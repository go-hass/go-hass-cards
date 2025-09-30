import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
export declare const enum WaterHeaterEntityFeature {
    TARGET_TEMPERATURE = 1,
    OPERATION_MODE = 2,
    AWAY_MODE = 4
}
export declare const OPERATION_MODES: readonly ["electric", "gas", "heat_pump", "eco", "performance", "high_demand", "off"];
export type OperationMode = (typeof OPERATION_MODES)[number];
export type WaterHeaterEntity = HassEntityBase & {
    attributes: HassEntityAttributeBase & {
        target_temp_step?: number;
        min_temp: number;
        max_temp: number;
        current_temperature?: number;
        temperature?: number;
        operation_mode: OperationMode;
        operation_list: OperationMode[];
        away_mode?: "on" | "off";
    };
};
export declare const compareWaterHeaterOperationMode: (mode1: OperationMode, mode2: OperationMode) => number;
export declare const WATER_HEATER_OPERATION_MODE_ICONS: Record<OperationMode, string>;
export declare const computeOperationModeIcon: (mode: OperationMode) => string;
