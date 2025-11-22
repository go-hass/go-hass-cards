import type { HomeAssistant } from "../types";
export interface ThreadRouter {
    instance_name: string;
    addresses: [string];
    border_agent_id: string | null;
    brand: "google" | "apple" | "homeassistant";
    extended_address: string;
    extended_pan_id: string;
    model_name: string | null;
    network_name: string | null;
    server: string | null;
    thread_version: string | null;
    unconfigured: boolean | null;
    vendor_name: string | null;
}
export interface ThreadDataSet {
    channel: number | null;
    created: string;
    dataset_id: string;
    extended_pan_id: string;
    network_name: string;
    pan_id: string | null;
    preferred_border_agent_id: string | null;
    preferred_extended_address: string | null;
    preferred: boolean;
    source: string;
}
export interface ThreadRouterDiscoveryEvent {
    key: string;
    type: "router_discovered" | "router_removed";
    data: ThreadRouter;
}
export declare const subscribeDiscoverThreadRouters: (hass: HomeAssistant, callbackFunction: (routers: ThreadRouter[]) => void) => Promise<() => Promise<void>>;
export declare const listThreadDataSets: (hass: HomeAssistant) => Promise<{
    datasets: ThreadDataSet[];
}>;
export declare const getThreadDataSetTLV: (hass: HomeAssistant, dataset_id: string) => Promise<{
    tlv: string;
}>;
export declare const addThreadDataSet: (hass: HomeAssistant, source: string, tlv: string) => Promise<void>;
export declare const removeThreadDataSet: (hass: HomeAssistant, dataset_id: string) => Promise<void>;
export declare const setPreferredThreadDataSet: (hass: HomeAssistant, dataset_id: string) => Promise<void>;
export declare const setPreferredBorderAgent: (hass: HomeAssistant, dataset_id: string, border_agent_id: string | null, extended_address: string) => Promise<void>;
