import type { AreaRegistryEntry } from "../../../data/area_registry";
import type { FloorRegistryEntry } from "../../../data/floor_registry";
import type { HomeAssistant } from "../../../types";
interface AreaContext {
    area: AreaRegistryEntry | null;
    floor: FloorRegistryEntry | null;
}
export declare const getAreaContext: (area: AreaRegistryEntry, hassFloors: HomeAssistant["floors"]) => AreaContext;
export {};
