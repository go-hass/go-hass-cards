import { type Connection, type UnsubscribeFunc } from "home-assistant-js-websocket";
import type { Store } from "home-assistant-js-websocket/dist/store";
import type { DataTableRowData } from "../components/data-table/ha-data-table";
export interface BluetoothDeviceData extends DataTableRowData {
    address: string;
    connectable: boolean;
    manufacturer_data: Record<number, string>;
    name: string;
    rssi: number;
    service_data: Record<string, string>;
    service_uuids: string[];
    source: string;
    time: number;
    tx_power: number;
}
export interface BluetoothConnectionData extends DataTableRowData {
    address: string;
    source: string;
}
export type HaScannerType = "usb" | "uart" | "remote" | "unknown";
export interface BluetoothScannerDetails {
    source: string;
    connectable: boolean;
    name: string;
    adapter: string;
    scanner_type?: HaScannerType;
}
export type BluetoothScannersDetails = Record<string, BluetoothScannerDetails>;
export interface BluetoothAllocationsData {
    source: string;
    slots: number;
    free: number;
    allocated: string[];
}
export interface BluetoothScannerState {
    source: string;
    adapter: string;
    current_mode: "active" | "passive" | null;
    requested_mode: "active" | "passive" | null;
}
export declare const subscribeBluetoothScannersDetailsUpdates: (conn: Connection, store: Store<BluetoothScannersDetails>) => Promise<UnsubscribeFunc>;
export declare const subscribeBluetoothScannersDetails: (conn: Connection, callbackFunction: (bluetoothScannersDetails: BluetoothScannersDetails) => void) => UnsubscribeFunc;
export declare const subscribeBluetoothAdvertisements: (conn: Connection, callbackFunction: (bluetoothDeviceData: BluetoothDeviceData[]) => void) => UnsubscribeFunc;
export declare const subscribeBluetoothConnectionAllocations: (conn: Connection, callbackFunction: (bluetoothAllocationsData: BluetoothAllocationsData[]) => void, configEntryId?: string) => Promise<() => Promise<void>>;
export declare const subscribeBluetoothScannerState: (conn: Connection, callbackFunction: (scannerState: BluetoothScannerState) => void, configEntryId?: string) => Promise<() => Promise<void>>;
