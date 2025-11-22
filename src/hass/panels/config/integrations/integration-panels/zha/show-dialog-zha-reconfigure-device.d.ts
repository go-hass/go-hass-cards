import type { ZHADevice } from "../../../../../data/zha";
export interface ZHAReconfigureDeviceDialogParams {
    device: ZHADevice;
}
export declare const loadZHAReconfigureDeviceDialog: () => Promise<typeof import("./dialog-zha-reconfigure-device")>;
export declare const showZHAReconfigureDeviceDialog: (element: HTMLElement, zhaReconfigureDeviceParams: ZHAReconfigureDeviceDialogParams) => void;
