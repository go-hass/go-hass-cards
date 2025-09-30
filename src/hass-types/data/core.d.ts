import type { HassConfig } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export interface ConfigUpdateValues {
    location_name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    radius: number;
    unit_system: "metric" | "us_customary";
    time_zone: string;
    external_url?: string | null;
    internal_url?: string | null;
    currency?: string | null;
    country?: string | null;
    language?: string | null;
}
export interface CheckConfigResult {
    result: "valid" | "invalid";
    errors: string | null;
    warnings: string | null;
}
export declare const saveCoreConfig: (hass: HomeAssistant, values: Partial<ConfigUpdateValues>) => Promise<HassConfig>;
export declare const detectCoreConfig: (hass: HomeAssistant) => Promise<Partial<ConfigUpdateValues>>;
export declare const checkCoreConfig: (hass: HomeAssistant) => Promise<CheckConfigResult>;
