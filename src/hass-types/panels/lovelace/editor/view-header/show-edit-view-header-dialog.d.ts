import type { LovelaceViewHeaderConfig } from "../../../../data/lovelace/config/view";
export interface EditViewHeaderDialogParams {
    saveConfig: (config: LovelaceViewHeaderConfig) => void;
    config: LovelaceViewHeaderConfig;
}
export declare const showEditViewHeaderDialog: (element: HTMLElement, dialogParams: EditViewHeaderDialogParams) => void;
