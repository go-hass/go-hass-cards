import type { HaDevicePickerDeviceFilterFunc } from "../components/device/ha-device-picker";
import type { PickerComboBoxItem } from "../components/ha-picker-combo-box";
import type { HomeAssistant } from "../types";
import type { ConfigEntry } from "./config_entries";
import type { HaEntityPickerEntityFilterFunc } from "./entity";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry } from "./entity_registry";
import type { EntitySources } from "./entity_sources";
import type { RegistryEntry } from "./registry";
export { fetchDeviceRegistry, subscribeDeviceRegistry, } from "./ws-device_registry";
export interface DeviceRegistryEntry extends RegistryEntry {
    id: string;
    config_entries: string[];
    config_entries_subentries: Record<string, (string | null)[]>;
    connections: [string, string][];
    identifiers: [string, string][];
    manufacturer: string | null;
    model: string | null;
    model_id: string | null;
    name: string | null;
    labels: string[];
    sw_version: string | null;
    hw_version: string | null;
    serial_number: string | null;
    via_device_id: string | null;
    area_id: string | null;
    name_by_user: string | null;
    entry_type: "service" | null;
    disabled_by: "user" | "integration" | "config_entry" | null;
    configuration_url: string | null;
    primary_config_entry: string | null;
}
export type DeviceEntityDisplayLookup = Record<string, EntityRegistryDisplayEntry[]>;
export type DeviceEntityLookup = Record<string, EntityRegistryEntry[]>;
export interface DeviceRegistryEntryMutableParams {
    area_id?: string | null;
    name_by_user?: string | null;
    disabled_by?: string | null;
    labels?: string[];
}
export declare const fallbackDeviceName: (hass: HomeAssistant, entities: EntityRegistryEntry[] | EntityRegistryDisplayEntry[] | string[]) => string;
export declare const devicesInArea: (devices: DeviceRegistryEntry[], areaId: string) => DeviceRegistryEntry[];
export declare const updateDeviceRegistryEntry: (hass: HomeAssistant, deviceId: string, updates: Partial<DeviceRegistryEntryMutableParams>) => Promise<DeviceRegistryEntry>;
export declare const removeConfigEntryFromDevice: (hass: HomeAssistant, deviceId: string, configEntryId: string) => Promise<DeviceRegistryEntry>;
export declare const sortDeviceRegistryByName: (entries: DeviceRegistryEntry[], language: string) => DeviceRegistryEntry[];
export declare const getDeviceEntityLookup: (entities: EntityRegistryEntry[]) => DeviceEntityLookup;
export declare const getDeviceEntityDisplayLookup: (entities: EntityRegistryDisplayEntry[]) => DeviceEntityDisplayLookup;
export declare const getDeviceIntegrationLookup: (entitySources: EntitySources, entities: EntityRegistryDisplayEntry[] | EntityRegistryEntry[], devices?: DeviceRegistryEntry[], configEntries?: ConfigEntry[]) => Record<string, Set<string>>;
export interface DevicePickerItem extends PickerComboBoxItem {
    domain?: string;
    domain_name?: string;
}
export declare const getDevices: (hass: HomeAssistant, configEntryLookup: Record<string, ConfigEntry>, includeDomains?: string[], excludeDomains?: string[], includeDeviceClasses?: string[], deviceFilter?: HaDevicePickerDeviceFilterFunc, entityFilter?: HaEntityPickerEntityFilterFunc, excludeDevices?: string[], value?: string) => DevicePickerItem[];
