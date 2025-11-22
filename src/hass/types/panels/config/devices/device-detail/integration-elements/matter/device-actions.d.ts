import type { DeviceRegistryEntry } from "../../../../../../data/device_registry";
import type { HomeAssistant } from "../../../../../../types";
import type { DeviceAction } from "../../../ha-config-device-page";
export declare const getMatterDeviceDefaultActions: (el: HTMLElement, hass: HomeAssistant, device: DeviceRegistryEntry) => DeviceAction[];
export declare const getMatterDeviceActions: (el: HTMLElement, hass: HomeAssistant, device: DeviceRegistryEntry) => Promise<DeviceAction[]>;
