import type { FloorRegistryEntry, FloorRegistryEntryMutableParams } from "../../../data/floor_registry";
export interface FloorRegistryDetailDialogParams {
    entry?: FloorRegistryEntry;
    suggestedName?: string;
    createEntry?: (values: FloorRegistryEntryMutableParams, addedAreas: Set<string>) => Promise<unknown>;
    updateEntry?: (updates: Partial<FloorRegistryEntryMutableParams>, addedAreas: Set<string>, removedAreas: Set<string>) => Promise<unknown>;
}
export declare const loadFloorRegistryDetailDialog: () => Promise<typeof import("./dialog-floor-registry-detail")>;
export declare const showFloorRegistryDetailDialog: (element: HTMLElement, systemLogDetailParams: FloorRegistryDetailDialogParams) => void;
