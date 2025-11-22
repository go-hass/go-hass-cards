import type { DeviceRegistryEntry } from "../../../../../../data/device_registry";
import type { HomeAssistant } from "../../../../../../types";
import type { DeviceAlert } from "../../../ha-config-device-page";
export declare const getZwaveDeviceAlerts: (hass: HomeAssistant, device: DeviceRegistryEntry) => Promise<DeviceAlert[]>;
