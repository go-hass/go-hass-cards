import type { AreaRegistryEntry, AreaRegistryEntryMutableParams } from "../../../data/area_registry";
export interface AreaRegistryDetailDialogParams {
    entry?: AreaRegistryEntry;
    suggestedName?: string;
    createEntry?: (values: AreaRegistryEntryMutableParams) => Promise<unknown>;
    updateEntry?: (updates: Partial<AreaRegistryEntryMutableParams>) => Promise<unknown>;
}
export declare const loadAreaRegistryDetailDialog: () => Promise<typeof import("./dialog-area-registry-detail")>;
export declare const showAreaRegistryDetailDialog: (element: HTMLElement, systemLogDetailParams: AreaRegistryDetailDialogParams) => void;
