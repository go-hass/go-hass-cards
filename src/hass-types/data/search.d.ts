import type { HomeAssistant } from "../types";
export interface RelatedResult {
    area?: string[];
    automation?: string[];
    automation_blueprint?: string[];
    config_entry?: string[];
    device?: string[];
    entity?: string[];
    group?: string[];
    integration?: string[];
    scene?: string[];
    script?: string[];
    script_blueprint?: string[];
}
export declare const SearchableDomains: Set<string>;
export type ItemType = "area" | "automation" | "config_entry" | "device" | "entity" | "floor" | "group" | "label" | "scene" | "script" | "automation_blueprint" | "script_blueprint";
export declare const findRelated: (hass: HomeAssistant, itemType: ItemType, itemId: string) => Promise<RelatedResult>;
