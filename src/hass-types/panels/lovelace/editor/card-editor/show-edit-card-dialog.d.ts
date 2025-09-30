import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceSectionConfig } from "../../../../data/lovelace/config/section";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
export interface EditCardDialogParams {
    lovelaceConfig: LovelaceConfig;
    saveCardConfig: (config: LovelaceCardConfig) => void;
    cardConfig: LovelaceCardConfig;
    sectionConfig?: LovelaceSectionConfig;
    isNew?: boolean;
}
export declare const importEditCardDialog: () => Promise<typeof import("./hui-dialog-edit-card")>;
export declare const showEditCardDialog: (element: HTMLElement, editCardDialogParams: EditCardDialogParams) => void;
