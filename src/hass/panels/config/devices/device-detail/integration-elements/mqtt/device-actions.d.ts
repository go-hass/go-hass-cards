import type { DeviceRegistryEntry } from "../../../../../../data/device_registry";
import type { DeviceAction } from "../../../ha-config-device-page";
export declare const getMQTTDeviceActions: (el: HTMLElement, device: DeviceRegistryEntry) => DeviceAction[];
