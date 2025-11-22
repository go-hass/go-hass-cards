import type { HassEntity } from "home-assistant-js-websocket";
import type { HaFormSchema } from "../components/ha-form/types";
import type { HomeAssistant } from "../types";
export interface ZHAEntityReference extends HassEntity {
    name: string;
    original_name?: string;
}
export interface ZHADevice {
    available: boolean;
    name: string;
    ieee: string;
    nwk: number;
    lqi: number;
    rssi: string;
    last_seen: string;
    manufacturer: string;
    model: string;
    quirk_applied: boolean;
    quirk_class: string;
    entities: ZHAEntityReference[];
    manufacturer_code: number;
    device_reg_id: string;
    user_given_name?: string;
    power_source?: string;
    area_id?: string;
    device_type: string;
    active_coordinator: boolean;
    signature: any;
    neighbors: Neighbor[];
    routes: Route[];
    pairing_status?: string;
}
export interface Neighbor {
    ieee: string;
    nwk: string;
    lqi: string;
    depth: string;
    relationship: string;
}
export interface Route {
    dest_nwk: string;
    route_status: RouteStatus;
    memory_constrained: boolean;
    many_to_one: boolean;
    route_record_required: boolean;
    next_hop: string;
}
export declare enum RouteStatus {
    Active = "Active",
    DiscoveryUnderway = "Discovery_Underway",
    DiscoveryFailed = "Discovery_Failed",
    Inactive = "Inactive",
    ValidationUnderway = "Validation_Underway"
}
export interface ZHADeviceEndpoint {
    device: ZHADevice;
    endpoint_id: number;
    entities: ZHAEntityReference[];
}
export interface Attribute {
    name: string;
    id: number;
}
export interface Cluster {
    name: string;
    id: number;
    endpoint_id: number;
    type: string;
}
export interface ClusterConfigurationData {
    cluster_name: string;
    cluster_id: number;
    success: boolean;
}
export interface ClusterAttributeData {
    cluster_name: string;
    cluster_id: number;
    attributes: AttributeConfigurationStatus[];
}
export interface AttributeConfigurationStatus {
    id: number;
    name: string;
    status: string;
    min: number;
    max: number;
    change: number;
}
export interface ClusterConfigurationStatus {
    cluster: Cluster;
    bindSuccess: boolean | undefined;
    attributes: Map<number, AttributeConfigurationStatus>;
}
interface ClusterConfigurationBindEvent {
    type: "zha_channel_bind";
    zha_channel_msg_data: ClusterConfigurationData;
}
interface ClusterConfigurationReportConfigurationEvent {
    type: "zha_channel_configure_reporting";
    zha_channel_msg_data: ClusterAttributeData;
}
interface ClusterConfigurationEventFinish {
    type: "zha_channel_cfg_done";
}
export type ClusterConfigurationEvent = ClusterConfigurationReportConfigurationEvent | ClusterConfigurationBindEvent | ClusterConfigurationEventFinish;
export interface Command {
    name: string;
    id: number;
    type: string;
    schema: HaFormSchema[];
}
export interface ReadAttributeServiceData {
    ieee: string;
    endpoint_id: number;
    cluster_id: number;
    cluster_type: string;
    attribute: number;
    manufacturer?: number;
}
export interface ZHAGroup {
    name: string;
    group_id: number;
    members: ZHADeviceEndpoint[];
}
export interface ZHAConfiguration {
    data: Record<string, Record<string, unknown>>;
    schemas: Record<string, HaFormSchema[]>;
}
export interface ZHANetworkBackupNodeInfo {
    nwk: string;
    ieee: string;
    logical_type: "coordinator" | "router" | "end_device";
}
export interface ZHANetworkBackupKey {
    key: string;
    tx_counter: number;
    rx_counter: number;
    seq: number;
    partner_ieee: string;
}
export interface ZHANetworkBackupNetworkInfo {
    extended_pan_id: string;
    pan_id: string;
    nwk_update_id: number;
    nwk_manager_id: string;
    channel: number;
    channel_mask: number[];
    security_level: number;
    network_key: ZHANetworkBackupKey;
    tc_link_key: ZHANetworkBackupKey;
    key_table: ZHANetworkBackupKey[];
    children: string[];
    nwk_addresses: Record<string, string>;
    stack_specific?: Record<string, any>;
    metadata: Record<string, any>;
    source: string;
}
export interface ZHANetworkBackup {
    backup_time: string;
    network_info: ZHANetworkBackupNetworkInfo;
    node_info: ZHANetworkBackupNodeInfo;
}
export interface ZHADeviceSettings {
    path: string;
    baudrate?: number;
    flow_control?: string;
}
export interface ZHANetworkSettings {
    settings: ZHANetworkBackup;
    radio_type: "ezsp" | "znp" | "deconz" | "zigate" | "xbee";
    device: ZHADeviceSettings;
}
export interface ZHANetworkBackupAndMetadata {
    backup: ZHANetworkBackup;
    is_complete: boolean;
}
export interface ZHAGroupMember {
    ieee: string;
    endpoint_id: string;
}
export declare const reconfigureNode: (hass: HomeAssistant, ieeeAddress: string, callbackFunction: (message: ClusterConfigurationEvent) => void) => Promise<() => Promise<void>>;
export declare const refreshTopology: (hass: HomeAssistant) => Promise<void>;
export declare const fetchAttributesForCluster: (hass: HomeAssistant, ieeeAddress: string, endpointId: number, clusterId: number, clusterType: string) => Promise<Attribute[]>;
export declare const fetchDevices: (hass: HomeAssistant) => Promise<ZHADevice[]>;
export declare const fetchZHADevice: (hass: HomeAssistant, ieeeAddress: string) => Promise<ZHADevice>;
export declare const fetchBindableDevices: (hass: HomeAssistant, ieeeAddress: string) => Promise<ZHADevice[]>;
export declare const bindDevices: (hass: HomeAssistant, sourceIEEE: string, targetIEEE: string) => Promise<void>;
export declare const unbindDevices: (hass: HomeAssistant, sourceIEEE: string, targetIEEE: string) => Promise<void>;
export declare const bindDeviceToGroup: (hass: HomeAssistant, deviceIEEE: string, groupId: number, clusters: Cluster[]) => Promise<void>;
export declare const unbindDeviceFromGroup: (hass: HomeAssistant, deviceIEEE: string, groupId: number, clusters: Cluster[]) => Promise<void>;
export declare const readAttributeValue: (hass: HomeAssistant, data: ReadAttributeServiceData) => Promise<string>;
export declare const fetchCommandsForCluster: (hass: HomeAssistant, ieeeAddress: string, endpointId: number, clusterId: number, clusterType: string) => Promise<Command[]>;
export declare const fetchClustersForZhaDevice: (hass: HomeAssistant, ieeeAddress: string) => Promise<Cluster[]>;
export declare const fetchGroups: (hass: HomeAssistant) => Promise<ZHAGroup[]>;
export declare const removeGroups: (hass: HomeAssistant, groupIdsToRemove: number[]) => Promise<ZHAGroup[]>;
export declare const fetchGroup: (hass: HomeAssistant, groupId: number) => Promise<ZHAGroup>;
export declare const fetchGroupableDevices: (hass: HomeAssistant) => Promise<ZHADeviceEndpoint[]>;
export declare const addMembersToGroup: (hass: HomeAssistant, groupId: number, membersToAdd: ZHAGroupMember[]) => Promise<ZHAGroup>;
export declare const removeMembersFromGroup: (hass: HomeAssistant, groupId: number, membersToRemove: ZHAGroupMember[]) => Promise<ZHAGroup>;
export declare const addGroup: (hass: HomeAssistant, groupName: string, groupId?: number, membersToAdd?: ZHAGroupMember[]) => Promise<ZHAGroup>;
export declare const fetchZHAConfiguration: (hass: HomeAssistant) => Promise<ZHAConfiguration>;
export declare const updateZHAConfiguration: (hass: HomeAssistant, data: any) => Promise<any>;
export declare const fetchZHANetworkSettings: (hass: HomeAssistant) => Promise<ZHANetworkSettings>;
export declare const createZHANetworkBackup: (hass: HomeAssistant) => Promise<ZHANetworkBackupAndMetadata>;
export declare const restoreZHANetworkBackup: (hass: HomeAssistant, backup: ZHANetworkBackup, ezspForceWriteEUI64?: boolean) => Promise<void>;
export declare const listZHANetworkBackups: (hass: HomeAssistant) => Promise<ZHANetworkBackup[]>;
export declare const changeZHANetworkChannel: (hass: HomeAssistant, newChannel: "auto" | number) => Promise<void>;
export declare const INITIALIZED = "INITIALIZED";
export declare const INTERVIEW_COMPLETE = "INTERVIEW_COMPLETE";
export declare const CONFIGURED = "CONFIGURED";
export declare const PAIRED = "PAIRED";
export declare const INCOMPLETE_PAIRING_STATUSES: string[];
export declare const DEVICE_JOINED = "device_joined";
export declare const RAW_DEVICE_INITIALIZED = "raw_device_initialized";
export declare const DEVICE_FULLY_INITIALIZED = "device_fully_initialized";
export declare const DEVICE_MESSAGE_TYPES: string[];
export declare const LOG_OUTPUT = "log_output";
export declare const ZHA_CHANNEL_MSG = "zha_channel_message";
export declare const ZHA_CHANNEL_MSG_BIND = "zha_channel_bind";
export declare const ZHA_CHANNEL_MSG_CFG_RPT = "zha_channel_configure_reporting";
export declare const ZHA_CHANNEL_CFG_DONE = "zha_channel_cfg_done";
export {};
