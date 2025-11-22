import type { Zone, ZoneMutableParams } from "../../../data/zone";
export interface ZoneDetailDialogParams {
    entry?: Zone;
    createEntry: (values: ZoneMutableParams) => Promise<unknown>;
    updateEntry?: (updates: Partial<ZoneMutableParams>) => Promise<unknown>;
    removeEntry?: () => Promise<boolean>;
}
export declare const loadZoneDetailDialog: () => Promise<typeof import("./dialog-zone-detail")>;
export declare const showZoneDetailDialog: (element: HTMLElement, systemLogDetailParams: ZoneDetailDialogParams) => void;
