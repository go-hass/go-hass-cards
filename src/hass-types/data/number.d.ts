import type { HomeAssistant } from "../types";
export interface NumberDeviceClassUnits {
    units: string[];
}
export declare const getNumberDeviceClassConvertibleUnits: (hass: HomeAssistant, deviceClass: string) => Promise<NumberDeviceClassUnits>;
