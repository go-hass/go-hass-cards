import type { DeviceRegistryEntry } from "../../../../../data/device_registry";
export interface ZWaveJSUpdateFirmwareNodeDialogParams {
    device: DeviceRegistryEntry;
}
export declare const loadUpdateFirmwareNodeDialog: () => Promise<typeof import("./dialog-zwave_js-update-firmware-node")>;
export declare const showZWaveJSUpdateFirmwareNodeDialog: (element: HTMLElement, updateFirmwareNodeDialogParams: ZWaveJSUpdateFirmwareNodeDialogParams) => void;
