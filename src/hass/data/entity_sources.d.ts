import type { HomeAssistant } from "../types";
interface EntitySource {
    domain: string;
}
export type EntitySources = Record<string, EntitySource>;
export declare const fetchEntitySourcesWithCache: (hass: HomeAssistant) => Promise<EntitySources>;
export {};
