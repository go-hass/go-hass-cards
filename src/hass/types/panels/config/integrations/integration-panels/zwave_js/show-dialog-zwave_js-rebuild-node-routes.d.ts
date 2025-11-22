import type { DeviceRegistryEntry } from "../../../../../data/device_registry";
export interface ZWaveJSRebuildNodeRoutesDialogParams {
    device: DeviceRegistryEntry;
}
export declare const loadRebuildNodeRoutesDialog: () => Promise<typeof import("./dialog-zwave_js-rebuild-node-routes")>;
export declare const showZWaveJSRebuildNodeRoutesDialog: (element: HTMLElement, rebuildNodeRoutesDialogParams: ZWaveJSRebuildNodeRoutesDialogParams) => void;
