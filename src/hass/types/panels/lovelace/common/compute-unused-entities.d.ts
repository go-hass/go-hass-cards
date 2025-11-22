import type { LovelaceConfig } from "../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../types";
export declare const EXCLUDED_DOMAINS: string[];
export declare const computeUsedEntities: (config: LovelaceConfig) => Set<string>;
export declare const calcUnusedEntities: (hass: HomeAssistant, usedEntities: Set<string>) => Set<string>;
export declare const computeUnusedEntities: (hass: HomeAssistant, config: LovelaceConfig) => Set<string>;
