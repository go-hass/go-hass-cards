import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../types";
export declare const addEntitiesToLovelaceView: (element: HTMLElement, hass: HomeAssistant, cardConfig: LovelaceCardConfig[], sectionConfig?: LovelaceSectionConfig, entities?: string[]) => Promise<void>;
