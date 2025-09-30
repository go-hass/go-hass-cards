import type { UnsubscribeFunc } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare enum NetworkType {
    THREAD = "thread",
    WIFI = "wifi",
    ETHERNET = "ethernet",
    UNKNOWN = "unknown"
}
export declare enum NodeType {
    END_DEVICE = "end_device",
    SLEEPY_END_DEVICE = "sleepy_end_device",
    ROUTING_END_DEVICE = "routing_end_device",
    BRIDGE = "bridge",
    UNKNOWN = "unknown"
}
export interface MatterFabricData {
    fabric_id: number;
    vendor_id: number;
    fabric_index: number;
    fabric_label?: string;
    vendor_name?: string;
}
export interface MatterNodeDiagnostics {
    node_id: number;
    network_type: NetworkType;
    node_type: NodeType;
    network_name?: string;
    ip_adresses: string[];
    mac_address?: string;
    available: boolean;
    active_fabrics: MatterFabricData[];
    active_fabric_index: number;
}
export type MatterPingResult = Record<string, boolean>;
export interface MatterCommissioningParameters {
    setup_pin_code: number;
    setup_manual_code: string;
    setup_qr_code: string;
}
export declare const canCommissionMatterExternal: (hass: HomeAssistant) => boolean;
export declare const startExternalCommissioning: (hass: HomeAssistant) => Promise<void>;
export declare const redirectOnNewMatterDevice: (hass: HomeAssistant, callback?: () => void) => UnsubscribeFunc;
export declare const addMatterDevice: (hass: HomeAssistant) => void;
export declare const commissionMatterDevice: (hass: HomeAssistant, code: string) => Promise<void>;
export declare const acceptSharedMatterDevice: (hass: HomeAssistant, pin: number) => Promise<void>;
export declare const matterSetWifi: (hass: HomeAssistant, network_name: string, password: string) => Promise<void>;
export declare const matterSetThread: (hass: HomeAssistant, thread_operation_dataset: string) => Promise<void>;
export declare const getMatterNodeDiagnostics: (hass: HomeAssistant, device_id: string) => Promise<MatterNodeDiagnostics>;
export declare const pingMatterNode: (hass: HomeAssistant, device_id: string) => Promise<MatterPingResult>;
export declare const openMatterCommissioningWindow: (hass: HomeAssistant, device_id: string) => Promise<MatterCommissioningParameters>;
export declare const removeMatterFabric: (hass: HomeAssistant, device_id: string, fabric_index: number) => Promise<void>;
export declare const interviewMatterNode: (hass: HomeAssistant, device_id: string) => Promise<void>;
