import type { HaDevicePickerDeviceFilterFunc } from "../components/device/ha-device-picker";
import type { PickerComboBoxItem } from "../components/ha-picker-combo-box";
import type { HomeAssistant } from "../types";
import type { AreaRegistryEntry } from "./area_registry";
import type { HaEntityPickerEntityFilterFunc } from "./entity";
import { type FloorRegistryEntry } from "./floor_registry";
export interface FloorComboBoxItem extends PickerComboBoxItem {
    type: "floor" | "area";
    floor?: FloorRegistryEntry;
    area?: AreaRegistryEntry;
}
export interface AreaFloorValue {
    id: string;
    type: "floor" | "area";
}
export declare const getAreasAndFloors: (states: HomeAssistant["states"], haFloors: HomeAssistant["floors"], haAreas: HomeAssistant["areas"], haDevices: HomeAssistant["devices"], haEntities: HomeAssistant["entities"], formatId: (value: AreaFloorValue) => string, includeDomains?: string[], excludeDomains?: string[], includeDeviceClasses?: string[], deviceFilter?: HaDevicePickerDeviceFilterFunc, entityFilter?: HaEntityPickerEntityFilterFunc, excludeAreas?: string[], excludeFloors?: string[]) => FloorComboBoxItem[];
