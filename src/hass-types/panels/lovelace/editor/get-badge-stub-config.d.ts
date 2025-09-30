import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { HomeAssistant } from "../../../types";
export declare const getBadgeStubConfig: (hass: HomeAssistant, type: string, entities: string[], entitiesFallback: string[]) => Promise<LovelaceCardConfig>;
