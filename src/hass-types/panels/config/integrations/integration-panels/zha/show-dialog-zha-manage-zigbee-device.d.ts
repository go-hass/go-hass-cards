import type { ZHADevice } from "../../../../../data/zha";
export type Tab = "clusters" | "bindings" | "signature" | "neighbors";
export interface ZHAManageZigbeeDeviceDialogParams {
    device: ZHADevice;
    tab?: Tab;
}
export declare const loadZHAManageZigbeeDeviceDialog: () => Promise<typeof import("./dialog-zha-manage-zigbee-device")>;
export declare const showZHAManageZigbeeDeviceDialog: (element: HTMLElement, params: ZHAManageZigbeeDeviceDialogParams) => void;
