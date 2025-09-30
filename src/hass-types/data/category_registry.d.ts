import type { Connection } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export interface CategoryRegistryEntry {
    category_id: string;
    name: string;
    icon: string | null;
}
export interface CategoryRegistryEntryMutableParams {
    name: string;
    icon?: string | null;
}
export declare const fetchCategoryRegistry: (conn: Connection, scope: string) => Promise<CategoryRegistryEntry[]>;
export declare const subscribeCategoryRegistry: (conn: Connection, scope: string, onChange: (floors: CategoryRegistryEntry[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
export declare const createCategoryRegistryEntry: (hass: HomeAssistant, scope: string, values: CategoryRegistryEntryMutableParams) => Promise<CategoryRegistryEntry>;
export declare const updateCategoryRegistryEntry: (hass: HomeAssistant, scope: string, category_id: string, updates: Partial<CategoryRegistryEntryMutableParams>) => Promise<CategoryRegistryEntry>;
export declare const deleteCategoryRegistryEntry: (hass: HomeAssistant, scope: string, category_id: string) => Promise<unknown>;
