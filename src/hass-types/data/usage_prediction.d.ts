import type { HomeAssistant } from "../types";
export interface CommonControlResult {
    entities: string[];
}
export declare const getCommonControlUsagePrediction: (hass: HomeAssistant) => Promise<CommonControlResult>;
