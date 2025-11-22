import type { LabelRegistryEntry, LabelRegistryEntryMutableParams } from "../../../data/label_registry";
export interface LabelDetailDialogParams {
    entry?: LabelRegistryEntry;
    suggestedName?: string;
    createEntry?: (values: LabelRegistryEntryMutableParams, labelId?: string) => Promise<unknown>;
    updateEntry?: (updates: Partial<LabelRegistryEntryMutableParams>) => Promise<unknown>;
    removeEntry?: () => Promise<boolean>;
}
export declare const loadLabelDetailDialog: () => Promise<typeof import("./dialog-label-detail")>;
export declare const showLabelDetailDialog: (element: HTMLElement, dialogParams: LabelDetailDialogParams) => void;
