import type { HomeAssistant } from "../../types";
export interface CloudTTSInfo {
    languages: [
        string,
        string,
        string
    ][];
}
export declare const getCloudTTSInfo: (hass: HomeAssistant) => Promise<CloudTTSInfo>;
export declare const getCloudTtsLanguages: (info?: CloudTTSInfo) => string[];
