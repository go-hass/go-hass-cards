import type { LovelaceStrategyConfig } from "../../../data/lovelace/config/strategy";
import type { LovelaceConfig, LovelaceRawConfig } from "../../../data/lovelace/config/types";
import type { LovelaceViewConfig, LovelaceViewRawConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
export declare const isLegacyStrategy: (strategy: any) => strategy is LovelaceDashboardStrategy | LovelaceViewStrategy;
export interface LovelaceDashboardStrategy {
    generateDashboard(info: {
        config?: LovelaceRawConfig;
        hass: HomeAssistant;
    }): Promise<LovelaceConfig>;
}
export interface LovelaceViewStrategy {
    generateView(info: {
        view: LovelaceViewRawConfig;
        config: LovelaceConfig;
        hass: HomeAssistant;
    }): Promise<LovelaceViewConfig>;
}
export declare const isLegacyStrategyConfig: (config: LovelaceStrategyConfig) => boolean;
export declare const cleanLegacyStrategyConfig: (config: LovelaceStrategyConfig) => any;
