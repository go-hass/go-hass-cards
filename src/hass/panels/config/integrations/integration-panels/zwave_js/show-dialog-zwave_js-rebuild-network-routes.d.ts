export interface ZWaveJSRebuildNetworkRoutesDialogParams {
    entry_id: string;
}
export declare const loadRebuildNetworkRoutesDialog: () => Promise<typeof import("./dialog-zwave_js-rebuild-network-routes")>;
export declare const showZWaveJSRebuildNetworkRoutesDialog: (element: HTMLElement, rebuildNetworkRoutesDialogParams: ZWaveJSRebuildNetworkRoutesDialogParams) => void;
