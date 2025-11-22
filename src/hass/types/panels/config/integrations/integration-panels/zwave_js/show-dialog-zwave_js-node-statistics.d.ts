import type { DeviceRegistryEntry } from "../../../../../data/device_registry";
export interface ZWaveJSNodeStatisticsDialogParams {
    device: DeviceRegistryEntry;
}
export declare const loadNodeStatisticsDialog: () => Promise<typeof import("./dialog-zwave_js-node-statistics")>;
export declare const showZWaveJSNodeStatisticsDialog: (element: HTMLElement, nodeStatisticsDialogParams: ZWaveJSNodeStatisticsDialogParams) => void;
