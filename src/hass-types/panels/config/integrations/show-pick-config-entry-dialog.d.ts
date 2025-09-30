import type { ConfigEntry } from "../../../data/config_entries";
export interface PickConfigEntryDialogParams {
    domain: string;
    subFlowType: string;
    configEntries: ConfigEntry[];
    configEntryPicked: (configEntry: ConfigEntry) => void;
}
export declare const showPickConfigEntryDialog: (element: HTMLElement, dialogParams?: PickConfigEntryDialogParams) => void;
