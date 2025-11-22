import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceSectionConfig } from "../../../../data/lovelace/config/section";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { LovelaceContainerPath } from "../lovelace-path";
export interface SuggestCardDialogParams {
    lovelaceConfig?: LovelaceConfig;
    yaml?: boolean;
    saveConfig?: (config: LovelaceConfig) => void;
    path?: LovelaceContainerPath;
    entities?: string[];
    cardConfig: LovelaceCardConfig[];
    sectionConfig?: LovelaceSectionConfig;
}
export declare const showSuggestCardDialog: (element: HTMLElement, suggestCardDialogParams: SuggestCardDialogParams) => void;
