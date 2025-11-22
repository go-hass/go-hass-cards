import type { Connection } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../../../types";
import type { LovelaceResource } from "../resource";
import type { LovelaceStrategyConfig } from "./strategy";
import type { LovelaceViewRawConfig } from "./view";
export interface LovelaceDashboardBaseConfig {
}
export interface LovelaceConfig extends LovelaceDashboardBaseConfig {
    background?: string;
    views: LovelaceViewRawConfig[];
}
export interface LovelaceDashboardStrategyConfig extends LovelaceDashboardBaseConfig {
    strategy: LovelaceStrategyConfig;
}
export interface LegacyLovelaceConfig extends LovelaceConfig {
    resources?: LovelaceResource[];
}
export type LovelaceRawConfig = LovelaceConfig | LovelaceDashboardStrategyConfig;
export declare function isStrategyDashboard(config: LovelaceRawConfig): config is LovelaceDashboardStrategyConfig;
export declare const fetchConfig: (conn: Connection, urlPath: string | null, force: boolean) => Promise<LovelaceRawConfig>;
export declare const saveConfig: (hass: HomeAssistant, urlPath: string | null, config: LovelaceRawConfig) => Promise<void>;
export declare const deleteConfig: (hass: HomeAssistant, urlPath: string | null) => Promise<void>;
