import type { DeviceRegistryEntry } from "../../../../../../data/device_registry";
export interface MQTTDeviceDebugInfoDialogParams {
    device: DeviceRegistryEntry;
}
export declare const loadMQTTDeviceDebugInfoDialog: () => Promise<typeof import("./dialog-mqtt-device-debug-info")>;
export declare const showMQTTDeviceDebugInfoDialog: (element: HTMLElement, mqttDeviceInfoParams: MQTTDeviceDebugInfoDialogParams) => void;
