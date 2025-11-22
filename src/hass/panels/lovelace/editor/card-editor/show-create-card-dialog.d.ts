import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { LovelaceContainerPath } from "../lovelace-path";
export interface CreateCardDialogParams {
    lovelaceConfig: LovelaceConfig;
    saveConfig: (config: LovelaceConfig) => void;
    path: LovelaceContainerPath;
    suggestedCards?: string[];
    entities?: string[];
}
export declare const importCreateCardDialog: () => Promise<typeof import("./hui-dialog-create-card")>;
export declare const showCreateCardDialog: (element: HTMLElement, createCardDialogParams: CreateCardDialogParams) => void;
