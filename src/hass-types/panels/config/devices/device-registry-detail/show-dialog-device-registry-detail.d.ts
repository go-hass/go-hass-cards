import type { DeviceRegistryEntry, DeviceRegistryEntryMutableParams } from "../../../../data/device_registry";
export interface DeviceRegistryDetailDialogParams {
    device: DeviceRegistryEntry;
    updateEntry: (updates: Partial<DeviceRegistryEntryMutableParams>) => Promise<unknown>;
}
export declare const loadDeviceRegistryDetailDialog: () => Promise<typeof import("./dialog-device-registry-detail")>;
export declare const showDeviceRegistryDetailDialog: (element: HTMLElement, deviceRegistryDetailParams: DeviceRegistryDetailDialogParams) => void;
