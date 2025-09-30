import { type Connection, type UnsubscribeFunc } from "home-assistant-js-websocket";
import type { DataTableRowData } from "../components/data-table/ha-data-table";
export interface DHCPDiscoveryData extends DataTableRowData {
    mac_address: string;
    hostname: string;
    ip_address: string;
}
export declare const subscribeDHCPDiscovery: (conn: Connection, callbackFunction: (dhcpDiscoveryData: DHCPDiscoveryData[]) => void) => UnsubscribeFunc;
