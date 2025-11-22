import type { HomeAssistant } from "../types";
export interface LogProvider {
    key: string;
    name: string;
}
export declare const fetchErrorLog: (hass: HomeAssistant) => Promise<string>;
export declare const getErrorLogDownloadUrl: (hass: HomeAssistant) => "/api/hassio/core/logs/latest" | "/api/error_log";
