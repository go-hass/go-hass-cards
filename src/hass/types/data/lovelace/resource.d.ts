import type { Connection } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../../types";
export interface LovelaceResource {
    id: string;
    type: "css" | "js" | "module" | "html";
    url: string;
}
export interface LovelaceResourcesMutableParams {
    res_type: LovelaceResource["type"];
    url: string;
}
export declare const fetchResources: (conn: Connection) => Promise<LovelaceResource[]>;
export declare const createResource: (hass: HomeAssistant, values: LovelaceResourcesMutableParams) => Promise<LovelaceResource>;
export declare const updateResource: (hass: HomeAssistant, id: string, updates: Partial<LovelaceResourcesMutableParams>) => Promise<LovelaceResource>;
export declare const deleteResource: (hass: HomeAssistant, id: string) => Promise<unknown>;
