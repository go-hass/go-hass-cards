import { type Connection, type UnsubscribeFunc } from "home-assistant-js-websocket";
import type { DataTableRowData } from "../components/data-table/ha-data-table";
export interface SSDPDiscoveryData extends DataTableRowData {
    name: string | undefined;
    ssdp_usn: string;
    ssdp_st: string;
    upnp: Record<string, unknown>;
    ssdp_location: string | undefined;
    ssdp_nt: string | undefined;
    ssdp_udn: string | undefined;
    ssdp_ext: string | undefined;
    ssdp_server: string | undefined;
    ssdp_headers: Record<string, unknown>;
    ssdp_all_locations: string[];
    x_homeassistant_matching_domains: string[];
}
export declare const subscribeSSDPDiscovery: (conn: Connection, callbackFunction: (ssdpDiscoveryData: SSDPDiscoveryData[]) => void) => UnsubscribeFunc;
