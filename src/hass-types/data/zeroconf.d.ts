import { type Connection, type UnsubscribeFunc } from "home-assistant-js-websocket";
import type { DataTableRowData } from "../components/data-table/ha-data-table";
export interface ZeroconfDiscoveryData extends DataTableRowData {
    name: string;
    type: string;
    port: number;
    properties: Record<string, unknown>;
    ip_addresses: string[];
}
export declare const subscribeZeroconfDiscovery: (conn: Connection, callbackFunction: (zeroconfDiscoveryData: ZeroconfDiscoveryData[]) => void) => UnsubscribeFunc;
