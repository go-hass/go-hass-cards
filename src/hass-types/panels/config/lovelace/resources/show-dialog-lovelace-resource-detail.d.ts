import type { LovelaceResource, LovelaceResourcesMutableParams } from "../../../../data/lovelace/resource";
export interface LovelaceResourceDetailsDialogParams {
    resource?: LovelaceResource;
    createResource: (values: LovelaceResourcesMutableParams) => Promise<unknown>;
    updateResource: (updates: Partial<LovelaceResourcesMutableParams>) => Promise<unknown>;
}
export declare const loadResourceDetailDialog: () => Promise<typeof import("./dialog-lovelace-resource-detail")>;
export declare const showResourceDetailDialog: (element: HTMLElement, dialogParams: LovelaceResourceDetailsDialogParams) => void;
