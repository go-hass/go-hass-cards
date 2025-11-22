import type { DeviceRegistryEntry } from "../../data/device_registry";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry } from "../../data/entity_registry";
import type { HomeAssistant } from "../../types";
export declare const computeDeviceName: (device: DeviceRegistryEntry) => string | undefined;
export declare const computeDeviceNameDisplay: (device: DeviceRegistryEntry, hass: HomeAssistant, entities?: EntityRegistryEntry[] | EntityRegistryDisplayEntry[] | string[]) => string;
export declare const fallbackDeviceName: (hass: HomeAssistant, entities: EntityRegistryEntry[] | EntityRegistryDisplayEntry[] | string[]) => string;
export declare const getDuplicatedDeviceNames: import("memoize-one").MemoizedFn<(devices: HomeAssistant["devices"]) => Set<string>>;
