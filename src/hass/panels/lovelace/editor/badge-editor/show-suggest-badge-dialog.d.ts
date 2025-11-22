import type { LovelaceBadgeConfig } from "../../../../data/lovelace/config/badge";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { LovelaceContainerPath } from "../lovelace-path";
export interface SuggestBadgeDialogParams {
    lovelaceConfig?: LovelaceConfig;
    yaml?: boolean;
    saveConfig?: (config: LovelaceConfig) => void;
    path?: LovelaceContainerPath;
    entities?: string[];
    badgeConfig: LovelaceBadgeConfig[];
}
export declare const showSuggestBadgeDialog: (element: HTMLElement, suggestBadgeDialogParams: SuggestBadgeDialogParams) => void;
