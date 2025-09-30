import type { SSDPDiscoveryData } from "../../../../../data/ssdp";
export interface SSDPDiscoveryInfoDialogParams {
    entry: SSDPDiscoveryData;
}
export declare const loadSSDPDiscoveryInfoDialog: () => Promise<typeof import("./dialog-ssdp-discovery-info")>;
export declare const showSSDPDiscoveryInfoDialog: (element: HTMLElement, ssdpDiscoveryInfoDialogParams: SSDPDiscoveryInfoDialogParams) => void;
