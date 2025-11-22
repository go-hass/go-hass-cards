import type { ConfigEntry } from "../../data/config_entries";
import type { DataEntryFlowDialogParams } from "./show-dialog-data-entry-flow";
export declare const loadSubConfigFlowDialog: () => Promise<typeof import("./dialog-data-entry-flow")>;
export declare const showSubConfigFlowDialog: (element: HTMLElement, configEntry: ConfigEntry, flowType: string, dialogParams: Omit<DataEntryFlowDialogParams, "flowConfig"> & {
    subEntryId?: string;
}) => void;
