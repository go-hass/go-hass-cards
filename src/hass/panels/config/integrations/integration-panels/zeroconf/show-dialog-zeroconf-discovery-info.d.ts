import type { ZeroconfDiscoveryData } from "../../../../../data/zeroconf";
export interface ZeroconfDiscoveryInfoDialogParams {
    entry: ZeroconfDiscoveryData;
}
export declare const loadZeroconfDiscoveryInfoDialog: () => Promise<typeof import("./dialog-zeroconf-discovery-info")>;
export declare const showZeroconfDiscoveryInfoDialog: (element: HTMLElement, zeroconfDiscoveryInfoDialogParams: ZeroconfDiscoveryInfoDialogParams) => void;
