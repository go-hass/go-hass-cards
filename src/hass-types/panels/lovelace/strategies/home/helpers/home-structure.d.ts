import type { AreaRegistryEntry } from "../../../../../data/area_registry";
import type { FloorRegistryEntry } from "../../../../../data/floor_registry";
interface HomeStructure {
    floors: {
        id: string;
        areas: string[];
    }[];
    areas: string[];
}
export declare const getHomeStructure: (floors: FloorRegistryEntry[], areas: AreaRegistryEntry[]) => HomeStructure;
export {};
