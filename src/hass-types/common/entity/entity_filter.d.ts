import type { HomeAssistant } from "../../types";
type EntityCategory = "none" | "config" | "diagnostic";
export interface EntityFilter {
    domain?: string | string[];
    device_class?: string | string[];
    device?: string | null | (string | null)[];
    area?: string | null | (string | null)[];
    floor?: string | null | (string | null)[];
    label?: string | string[];
    entity_category?: EntityCategory | EntityCategory[];
    hidden_platform?: string | string[];
}
export type EntityFilterFunc = (entityId: string) => boolean;
export declare const generateEntityFilter: (hass: HomeAssistant, filter: EntityFilter) => EntityFilterFunc;
export declare const findEntities: (entities: string[], filters: EntityFilterFunc[]) => string[];
export {};
