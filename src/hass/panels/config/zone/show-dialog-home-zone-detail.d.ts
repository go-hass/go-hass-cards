import type { HomeZoneMutableParams } from "../../../data/zone";
export interface HomeZoneDetailDialogParams {
    updateEntry?: (updates: HomeZoneMutableParams) => Promise<unknown>;
}
export declare const loadHomeZoneDetailDialog: () => Promise<typeof import("./dialog-home-zone-detail")>;
export declare const showHomeZoneDetailDialog: (element: HTMLElement, params: HomeZoneDetailDialogParams) => void;
