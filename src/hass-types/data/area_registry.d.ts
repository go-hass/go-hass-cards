import type { HomeAssistant } from "../types";
import type { DeviceRegistryEntry } from "./device_registry";
import type { EntityRegistryEntry } from "./entity_registry";
import type { RegistryEntry } from "./registry";
export { subscribeAreaRegistry } from "./ws-area_registry";
export interface AreaRegistryEntry extends RegistryEntry {
    aliases: string[];
    area_id: string;
    floor_id: string | null;
    humidity_entity_id: string | null;
    icon: string | null;
    labels: string[];
    name: string;
    picture: string | null;
    temperature_entity_id: string | null;
}
export type AreaEntityLookup = Record<string, EntityRegistryEntry[]>;
export type AreaDeviceLookup = Record<string, DeviceRegistryEntry[]>;
export interface AreaRegistryEntryMutableParams {
    aliases?: string[];
    floor_id?: string | null;
    humidity_entity_id?: string | null;
    icon?: string | null;
    labels?: string[];
    name: string;
    picture?: string | null;
    temperature_entity_id?: string | null;
}
export declare const createAreaRegistryEntry: (hass: HomeAssistant, values: AreaRegistryEntryMutableParams) => Promise<AreaRegistryEntry>;
export declare const updateAreaRegistryEntry: (hass: HomeAssistant, areaId: string, updates: Partial<AreaRegistryEntryMutableParams>) => Promise<AreaRegistryEntry>;
export declare const deleteAreaRegistryEntry: (hass: HomeAssistant, areaId: string) => Promise<unknown>;
export declare const getAreaEntityLookup: (entities: EntityRegistryEntry[]) => AreaEntityLookup;
export declare const getAreaDeviceLookup: (devices: DeviceRegistryEntry[]) => AreaDeviceLookup;
export declare const areaCompare: (entries?: HomeAssistant["areas"], order?: string[]) => (a: string, b: string) => number;
