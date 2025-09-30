import type { LovelaceSectionConfig, LovelaceStrategySectionConfig } from "../../../data/lovelace/config/section";
import type { LovelaceConfig, LovelaceDashboardStrategyConfig, LovelaceRawConfig } from "../../../data/lovelace/config/types";
import type { LovelaceStrategyViewConfig, LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { LovelaceStrategy } from "./types";
export type LovelaceStrategyConfigType = "dashboard" | "view" | "section";
export declare const getLovelaceStrategy: <T extends LovelaceStrategyConfigType>(configType: T, strategyType: string) => Promise<LovelaceStrategy>;
export declare const generateLovelaceDashboardStrategy: (config: LovelaceDashboardStrategyConfig, hass: HomeAssistant) => Promise<LovelaceConfig>;
export declare const generateLovelaceViewStrategy: (config: LovelaceStrategyViewConfig, hass: HomeAssistant) => Promise<LovelaceViewConfig>;
export declare const generateLovelaceSectionStrategy: (config: LovelaceStrategySectionConfig, hass: HomeAssistant) => Promise<LovelaceSectionConfig>;
/**
 * Find all references to strategies and replaces them with the generated output
 */
export declare const expandLovelaceConfigStrategies: (config: LovelaceRawConfig, hass: HomeAssistant) => Promise<LovelaceConfig>;
