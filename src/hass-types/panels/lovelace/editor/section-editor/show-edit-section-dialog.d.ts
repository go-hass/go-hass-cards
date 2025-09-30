import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { Lovelace } from "../../types";
export interface EditSectionDialogParams {
    lovelace: Lovelace;
    lovelaceConfig: LovelaceConfig;
    saveConfig: (config: LovelaceConfig) => void;
    viewIndex: number;
    sectionIndex: number;
}
export declare const showEditSectionDialog: (element: HTMLElement, editSectionDialogParams: EditSectionDialogParams) => void;
