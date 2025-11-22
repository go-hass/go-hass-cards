import type { HassServiceTarget } from "home-assistant-js-websocket";
import type { HaDevicePickerDeviceFilterFunc } from "../components/device/ha-device-picker";
import type { HomeAssistant } from "../types";
import type { AreaRegistryEntry } from "./area_registry";
import type { DeviceRegistryEntry } from "./device_registry";
import type { HaEntityPickerEntityFilterFunc } from "./entity";
import type { EntityRegistryDisplayEntry } from "./entity_registry";
export type TargetType = "entity" | "device" | "area" | "label" | "floor";
export type TargetTypeFloorless = Exclude<TargetType, "floor">;
export interface ExtractFromTargetResult {
    missing_areas: string[];
    missing_devices: string[];
    missing_floors: string[];
    missing_labels: string[];
    referenced_areas: string[];
    referenced_devices: string[];
    referenced_entities: string[];
}
export interface ExtractFromTargetResultReferenced {
    referenced_areas: string[];
    referenced_devices: string[];
    referenced_entities: string[];
}
export declare const extractFromTarget: (hass: HomeAssistant, target: HassServiceTarget) => Promise<ExtractFromTargetResult>;
export declare const areaMeetsFilter: (area: AreaRegistryEntry, devices: HomeAssistant["devices"], entities: HomeAssistant["entities"], deviceFilter?: HaDevicePickerDeviceFilterFunc, includeDomains?: string[], includeDeviceClasses?: string[], states?: HomeAssistant["states"], entityFilter?: HaEntityPickerEntityFilterFunc) => boolean;
export declare const deviceMeetsFilter: (device: DeviceRegistryEntry, entities: HomeAssistant["entities"], deviceFilter?: HaDevicePickerDeviceFilterFunc, includeDomains?: string[], includeDeviceClasses?: string[], states?: HomeAssistant["states"], entityFilter?: HaEntityPickerEntityFilterFunc) => boolean;
export declare const entityRegMeetsFilter: (entity: EntityRegistryDisplayEntry, includeSecondary?: boolean, includeDomains?: string[], includeDeviceClasses?: string[], states?: HomeAssistant["states"], entityFilter?: HaEntityPickerEntityFilterFunc) => boolean;
