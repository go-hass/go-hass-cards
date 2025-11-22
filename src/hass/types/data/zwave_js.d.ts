import type { UnsubscribeFunc } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare enum InclusionState {
    /** The controller isn't doing anything regarding inclusion. */
    Idle = 0,
    /** The controller is waiting for a node to be included. */
    Including = 1,
    /** The controller is waiting for a node to be excluded. */
    Excluding = 2,
    /** The controller is busy including or excluding a node. */
    Busy = 3,
    /** The controller listening for SmartStart nodes to announce themselves. */
    SmartStart = 4
}
export declare const enum InclusionStrategy {
    /**
     * Always uses Security S2 if supported, otherwise uses Security S0 for certain devices which don't work without encryption and uses no encryption otherwise.
     *
     * Issues a warning if Security S0 or S2 is supported, but the secure bootstrapping fails.
     *
     * **This is the recommended** strategy and should be used unless there is a good reason not to.
     */
    Default = 0,
    /**
     * Include using SmartStart (requires Security S2).
     * Issues a warning if Security S2 is not supported, or the secure bootstrapping fails.
     *
     * **Should be preferred** over **Default** if supported.
     */
    SmartStart = 1,
    /**
     * Don't use encryption, even if supported.
     *
     * **Not recommended**, because S2 should be used where possible.
     */
    Insecure = 2,
    /**
     * Use Security S0, even if a higher security mode is supported.
     *
     * Issues a warning if Security S0 is not supported or the secure bootstrapping fails.
     *
     * **Not recommended** because S0 should be used sparingly and S2 preferred wherever possible.
     */
    Security_S0 = 3,
    /**
     * Use Security S2 and issue a warning if it is not supported or the secure bootstrapping fails.
     *
     * **Not recommended** because the *Default* strategy is more versatile and user-friendly.
     */
    Security_S2 = 4
}
export declare enum SecurityClass {
    /**
     * Used internally during inclusion of a node. Don't use this!
     */
    Temporary = -2,
    /**
     * `None` is used to indicate that a node is included without security.
     * It is not meant as input to methods that accept a security class.
     */
    None = -1,
    S2_Unauthenticated = 0,
    S2_Authenticated = 1,
    S2_AccessControl = 2,
    S0_Legacy = 7
}
/** A named list of Z-Wave features */
export declare enum ZWaveFeature {
    SmartStart = 0
}
declare enum QRCodeVersion {
    S2 = 0,
    SmartStart = 1
}
export declare enum Protocols {
    ZWave = 0,
    ZWaveLongRange = 1
}
declare enum NodeType {
    Controller = 0,
    /** @deprecated Use `NodeType["End Node"]` instead */
    "Routing End Node" = 1,
    "End Node" = 1
}
declare enum RFRegion {
    "Europe" = 0,
    "USA" = 1,
    "Australia/New Zealand" = 2,
    "Hong Kong" = 3,
    "India" = 5,
    "Israel" = 6,
    "Russia" = 7,
    "China" = 8,
    "USA (Long Range)" = 9,
    "Japan" = 32,
    "Korea" = 33,
    "Unknown" = 254,
    "Default (EU)" = 255
}
export declare enum NodeFirmwareUpdateStatus {
    Error_Timeout = -1,
    Error_Checksum = 0,
    Error_TransmissionFailed = 1,
    Error_InvalidManufacturerID = 2,
    Error_InvalidFirmwareID = 3,
    Error_InvalidFirmwareTarget = 4,
    Error_InvalidHeaderInformation = 5,
    Error_InvalidHeaderFormat = 6,
    Error_InsufficientMemory = 7,
    Error_InvalidHardwareVersion = 8,
    OK_WaitingForActivation = 253,
    OK_NoRestart = 254,
    OK_RestartPending = 255
}
export declare enum ControllerFirmwareUpdateStatus {
    Error_Timeout = 0,
    /** The maximum number of retry attempts for a firmware fragments were reached */
    Error_RetryLimitReached = 1,
    /** The update was aborted by the bootloader */
    Error_Aborted = 2,
    /** This controller does not support firmware updates */
    Error_NotSupported = 3,
    OK = 255
}
export interface QRProvisioningInformation {
    version: QRCodeVersion;
    securityClasses: SecurityClass[];
    dsk: string;
    genericDeviceClass: number;
    specificDeviceClass: number;
    installerIconType: number;
    manufacturerId: number;
    productType: number;
    productId: number;
    applicationVersion: string;
    maxInclusionRequestInterval?: number | undefined;
    uuid?: string | undefined;
    supportedProtocols?: Protocols[] | undefined;
    status?: ProvisioningEntryStatus;
}
export interface PlannedProvisioningEntry {
    /** The device specific key (DSK) in the form aaaaa-bbbbb-ccccc-ddddd-eeeee-fffff-11111-22222 */
    dsk: string;
    securityClasses: SecurityClass[];
    status?: ProvisioningEntryStatus;
}
export declare enum ProvisioningEntryStatus {
    Active = 0,
    Inactive = 1
}
export interface DeviceConfig {
    filename: string;
    manufacturer: string;
    manufacturerId: number;
    label: string;
    description: string;
    devices: {
        productType: number;
        productId: number;
    }[];
    firmwareVersion: {
        min: string;
        max: string;
    };
}
export declare const MINIMUM_QR_STRING_LENGTH = 52;
export interface ZWaveJSNetwork {
    client: ZWaveJSClient;
    controller: ZWaveJSController;
}
export interface ZWaveJSClient {
    state: "connected" | "disconnected";
    ws_server_url: string;
    server_version: string;
    driver_version: string;
}
export interface ZWaveJSController {
    home_id: number;
    sdk_version: string;
    type: number;
    own_node_id: number;
    rf_region: RFRegion | null;
    is_primary: boolean;
    is_using_home_id_from_other_network: boolean;
    is_sis_present: boolean;
    was_real_primary: boolean;
    is_suc: boolean;
    node_type: NodeType;
    firmware_version: string;
    manufacturer_id: number;
    product_id: number;
    product_type: number;
    supported_function_types: number[];
    suc_node_id: number;
    supports_timers: boolean;
    is_rebuilding_routes: boolean;
    inclusion_state: InclusionState;
    nodes: ZWaveJSNodeStatus[];
    supports_long_range: boolean;
}
export interface ZWaveJSNodeStatus {
    node_id: number;
    ready: boolean;
    status: NodeStatus;
    is_secure: boolean | string;
    is_routing: boolean | null;
    zwave_plus_version: number | null;
    highest_security_class: SecurityClass | null;
    is_controller_node: boolean;
    has_firmware_update_cc: boolean;
}
export type ZWaveJSNodeCapabilities = Record<number, ZWaveJSEndpointCapability[]>;
export interface ZWaveJSEndpointCapability {
    id: number;
    name: string;
    version: number;
    is_secure: boolean;
}
export interface ZwaveJSNodeMetadata {
    node_id: number;
    exclusion: string;
    inclusion: string;
    manual: string;
    wakeup: string;
    reset: string;
    device_database_url: string;
}
export interface ZwaveJSNodeAlerts {
    comments: ZWaveJSNodeComment[];
    is_embedded: boolean | null;
}
export type ZWaveJSNodeConfigParams = Record<string, ZWaveJSNodeConfigParam>;
export interface ZWaveJSNodeComment {
    level: "info" | "warning" | "error";
    text: string;
}
export interface ZWaveJSNodeConfigParam {
    property: number;
    property_key: number | null;
    endpoint: number;
    value: any;
    configuration_value_type: string;
    metadata: ZWaveJSNodeConfigParamMetadata;
}
export interface ZWaveJSNodeConfigParamMetadata {
    description: string;
    label: string;
    max: number;
    min: number;
    readable: boolean;
    writeable: boolean;
    type: string;
    unit: string;
    states: Record<number, string>;
    default: any;
}
export interface ZWaveJSSetConfigParamData {
    type: string;
    device_id: string;
    property: number;
    endpoint: number;
    property_key?: number;
    value: string | number;
}
export interface ZWaveJSSetRawConfigParamData {
    type: string;
    device_id: string;
    property: number;
    value: number;
    value_size: number;
    value_format: number;
}
export interface ZWaveJSSetConfigParamResult {
    value_id?: string;
    status?: string;
    error?: string;
}
export interface ZWaveJSDataCollectionStatus {
    enabled: boolean;
    opted_in: boolean;
}
export interface ZWaveJSRefreshNodeStatusMessage {
    event: string;
    stage?: string;
}
export interface ZWaveJSRebuildRoutesStatusMessage {
    event: string;
    rebuild_routes_status: Record<number, string>;
}
export interface ZWaveJSControllerStatisticsUpdatedMessage {
    event: "statistics updated";
    source: "controller";
    messages_tx: number;
    messages_rx: number;
    messages_dropped_tx: number;
    messages_dropped_rx: number;
    nak: number;
    can: number;
    timeout_ack: number;
    timeout_response: number;
    timeout_callback: number;
}
export declare enum RssiError {
    NotAvailable = 127,
    ReceiverSaturated = 126,
    NoSignalDetected = 125
}
export declare enum ProtocolDataRate {
    ZWave_9k6 = 1,
    ZWave_40k = 2,
    ZWave_100k = 3,
    LongRange_100k = 4
}
export interface ZWaveJSNodeStatisticsUpdatedMessage {
    event: "statistics updated";
    source: "node";
    nodeId?: number;
    node_id?: number;
    commands_tx: number;
    commands_rx: number;
    commands_dropped_tx: number;
    commands_dropped_rx: number;
    timeout_response: number;
    rtt: number | null;
    rssi: RssiError | number | null;
    lwr: ZWaveJSRouteStatistics | null;
    nlwr: ZWaveJSRouteStatistics | null;
}
export interface ZWaveJSRouteStatistics {
    protocol_data_rate: number;
    repeaters: string[];
    rssi: RssiError | number | null;
    repeater_rssi: (RssiError | number)[];
    route_failed_between: [string, string] | null;
}
export interface ZWaveJSNodeStatusUpdatedMessage {
    event: "ready" | "wake up" | "sleep" | "dead" | "alive";
    ready: boolean;
    status: NodeStatus;
}
export interface ZWaveJSFirmwareUpdateProgressMessage {
    event: "firmware update progress";
    current_file: number;
    total_files: number;
    sent_fragments: number;
    total_fragments: number;
    progress: number;
}
export interface ZWaveJSNodeFirmwareUpdateFinishedMessage {
    event: "firmware update finished";
    status: NodeFirmwareUpdateStatus;
    success: boolean;
    wait_time?: number;
    reinterview: boolean;
}
export interface ZWaveJSControllerFirmwareUpdateFinishedMessage {
    event: "firmware update finished";
    status: ControllerFirmwareUpdateStatus;
    success: boolean;
}
export type ZWaveJSNodeFirmwareUpdateCapabilities = {
    firmware_upgradable: false;
} | {
    firmware_upgradable: true;
    firmware_targets: number[];
    continues_to_function: boolean | null;
    supports_activation: boolean | null;
};
export interface ZWaveJSRemovedNode {
    node_id: number;
    manufacturer: string;
    label: string;
}
export interface ZWaveJSS2InclusionValidateDskAndEnterPinMessage {
    event: "validate dsk and enter pin";
    dsk: string;
}
export declare const enum NodeStatus {
    Unknown = 0,
    Asleep = 1,
    Awake = 2,
    Dead = 3,
    Alive = 4
}
export interface ZwaveJSProvisioningEntry {
    /** The device specific key (DSK) in the form aaaaa-bbbbb-ccccc-ddddd-eeeee-fffff-11111-22222 */
    dsk: string;
    securityClasses: SecurityClass[];
    nodeId?: number;
    status: ProvisioningEntryStatus;
    [prop: string]: any;
}
export interface RequestedGrant {
    /**
     * An array of security classes that are requested or to be granted.
     * The granted security classes MUST be a subset of the requested ones.
     */
    securityClasses: SecurityClass[];
    /** Whether client side authentication is requested or to be granted */
    clientSideAuth: boolean;
}
export declare const invokeZWaveCCApi: <T = unknown>(hass: HomeAssistant, device_id: string, command_class: number, endpoint: number | undefined, method_name: string, parameters: any[], wait_for_result?: boolean) => Promise<T>;
export declare const fetchZwaveNetworkStatus: (hass: HomeAssistant, device_or_entry_id: {
    device_id?: string;
    entry_id?: string;
}) => Promise<ZWaveJSNetwork>;
export declare const fetchZwaveDataCollectionStatus: (hass: HomeAssistant, entry_id: string) => Promise<ZWaveJSDataCollectionStatus>;
export declare const setZwaveDataCollectionPreference: (hass: HomeAssistant, entry_id: string, opted_in: boolean) => Promise<any>;
export declare const fetchZwaveProvisioningEntries: (hass: HomeAssistant, entry_id: string) => Promise<ZwaveJSProvisioningEntry[]>;
export declare const subscribeAddZwaveNode: (hass: HomeAssistant, entry_id: string, callbackFunction: (message: any) => void, qr_provisioning_information?: QRProvisioningInformation, qr_code_string?: string, planned_provisioning_entry?: PlannedProvisioningEntry, dsk?: string, inclusion_strategy?: InclusionStrategy) => Promise<UnsubscribeFunc>;
export declare const stopZwaveInclusion: (hass: HomeAssistant, entry_id: string) => Promise<unknown>;
export declare const stopZwaveExclusion: (hass: HomeAssistant, entry_id: string) => Promise<unknown>;
export declare const zwaveGrantSecurityClasses: (hass: HomeAssistant, entry_id: string, securityClasses: SecurityClass[], clientSideAuth?: boolean) => Promise<unknown>;
export declare const zwaveTryParseDskFromQrCode: (hass: HomeAssistant, entry_id: string, qr_code_string: string) => Promise<string>;
export declare const zwaveValidateDskAndEnterPin: (hass: HomeAssistant, entry_id: string, pin: string | false) => Promise<unknown>;
export declare const zwaveSupportsFeature: (hass: HomeAssistant, entry_id: string, feature: ZWaveFeature) => Promise<{
    supported: boolean;
}>;
export declare const zwaveParseQrCode: (hass: HomeAssistant, entry_id: string, qr_code_string: string) => Promise<QRProvisioningInformation>;
export declare const lookupZwaveDevice: (hass: HomeAssistant, entry_id: string, manufacturerId: number, productType: number, productId: number, applicationVersion?: string) => Promise<DeviceConfig>;
export declare const provisionZwaveSmartStartNode: (hass: HomeAssistant, entry_id: string, qr_provisioning_information?: QRProvisioningInformation, protocol?: Protocols, device_name?: string, area_id?: string) => Promise<string>;
export declare const unprovisionZwaveSmartStartNode: (hass: HomeAssistant, entry_id: string, dsk?: string, node_id?: number) => Promise<QRProvisioningInformation>;
export declare const subscribeNewDevices: (hass: HomeAssistant, entry_id: string, callbackFunction: (message: any) => void) => Promise<UnsubscribeFunc>;
export declare const fetchZwaveNodeStatus: (hass: HomeAssistant, device_id: string) => Promise<ZWaveJSNodeStatus>;
export declare const fetchZwaveNodeCapabilities: (hass: HomeAssistant, device_id: string) => Promise<ZWaveJSNodeCapabilities>;
export declare const subscribeZwaveNodeStatus: (hass: HomeAssistant, device_id: string, callbackFunction: (message: ZWaveJSNodeStatusUpdatedMessage) => void) => Promise<UnsubscribeFunc>;
export declare const fetchZwaveNodeMetadata: (hass: HomeAssistant, device_id: string) => Promise<ZwaveJSNodeMetadata>;
export declare const fetchZwaveNodeAlerts: (hass: HomeAssistant, device_id: string) => Promise<ZwaveJSNodeAlerts>;
export declare const fetchZwaveNodeConfigParameters: (hass: HomeAssistant, device_id: string) => Promise<ZWaveJSNodeConfigParams>;
export declare const setZwaveNodeConfigParameter: (hass: HomeAssistant, device_id: string, property: number, endpoint: number, value: number, property_key?: number) => Promise<ZWaveJSSetConfigParamResult>;
export declare const setZwaveNodeRawConfigParameter: (hass: HomeAssistant, device_id: string, property: number, value: number, value_size: number, value_format: number) => Promise<ZWaveJSSetConfigParamResult>;
export declare const getZwaveNodeRawConfigParameter: (hass: HomeAssistant, device_id: string, property: number) => Promise<number>;
export declare const reinterviewZwaveNode: (hass: HomeAssistant, device_id: string, callbackFunction: (message: ZWaveJSRefreshNodeStatusMessage) => void) => Promise<UnsubscribeFunc>;
export declare const rebuildZwaveNodeRoutes: (hass: HomeAssistant, device_id: string) => Promise<boolean>;
export declare const removeFailedZwaveNode: (hass: HomeAssistant, device_id: string, callbackFunction: (message: any) => void) => Promise<UnsubscribeFunc>;
export declare const rebuildZwaveNetworkRoutes: (hass: HomeAssistant, entry_id: string) => Promise<UnsubscribeFunc>;
export declare const stopRebuildingZwaveNetworkRoutes: (hass: HomeAssistant, entry_id: string) => Promise<UnsubscribeFunc>;
export declare const subscribeRebuildZwaveNetworkRoutesProgress: (hass: HomeAssistant, entry_id: string, callbackFunction: (message: ZWaveJSRebuildRoutesStatusMessage) => void) => Promise<UnsubscribeFunc>;
export declare const subscribeZwaveControllerStatistics: (hass: HomeAssistant, entry_id: string, callbackFunction: (message: ZWaveJSControllerStatisticsUpdatedMessage) => void) => Promise<UnsubscribeFunc>;
export declare const subscribeZwaveNodeStatistics: (hass: HomeAssistant, device_id: string, callbackFunction: (message: ZWaveJSNodeStatisticsUpdatedMessage) => void) => Promise<UnsubscribeFunc>;
export declare const subscribeS2Inclusion: (hass: HomeAssistant, entry_id: string, callbackFunction: (message: ZWaveJSS2InclusionValidateDskAndEnterPinMessage) => void) => Promise<UnsubscribeFunc>;
export declare const fetchZwaveIsNodeFirmwareUpdateInProgress: (hass: HomeAssistant, device_id: string) => Promise<boolean>;
export declare const fetchZwaveIsAnyOTAFirmwareUpdateInProgress: (hass: HomeAssistant, entry_id: string) => Promise<boolean>;
export declare const fetchZwaveNodeFirmwareUpdateCapabilities: (hass: HomeAssistant, device_id: string) => Promise<ZWaveJSNodeFirmwareUpdateCapabilities>;
export declare const hardResetController: (hass: HomeAssistant, entry_id: string) => Promise<string>;
export declare const uploadFirmwareAndBeginUpdate: (hass: HomeAssistant, device_id: string, file: File, target?: number, signal?: AbortSignal) => Promise<void>;
export declare const subscribeZwaveNodeFirmwareUpdate: (hass: HomeAssistant, device_id: string, callbackFunction: (message: ZWaveJSFirmwareUpdateProgressMessage | ZWaveJSControllerFirmwareUpdateFinishedMessage | ZWaveJSNodeFirmwareUpdateFinishedMessage) => void) => Promise<UnsubscribeFunc>;
export declare const abortZwaveNodeFirmwareUpdate: (hass: HomeAssistant, device_id: string) => Promise<UnsubscribeFunc>;
export declare const subscribeZwaveNVMBackup: (hass: HomeAssistant, entry_id: string, callbackFunction: (message: any) => void) => Promise<UnsubscribeFunc>;
export declare const restoreZwaveNVM: (hass: HomeAssistant, entry_id: string, data: string, callbackFunction: (message: any) => void) => Promise<UnsubscribeFunc>;
export type ZWaveJSLogUpdate = ZWaveJSLogMessageUpdate | ZWaveJSLogConfigUpdate;
interface ZWaveJSLogMessageUpdate {
    type: "log_message";
    log_message: ZWaveJSLogMessage;
}
interface ZWaveJSLogConfigUpdate {
    type: "log_config";
    log_config: ZWaveJSLogConfig;
}
export interface ZWaveJSLogMessage {
    timestamp: string;
    level: string;
    primary_tags: string;
    message: string | string[];
}
export declare const subscribeZWaveJSLogs: (hass: HomeAssistant, entry_id: string, callback: (update: ZWaveJSLogUpdate) => void) => Promise<() => Promise<void>>;
export interface ZWaveJSLogConfig {
    level: string;
    enabled: boolean;
    filename: string;
    log_to_file: boolean;
    force_console: boolean;
}
export declare const fetchZWaveJSLogConfig: (hass: HomeAssistant, entry_id: string) => Promise<ZWaveJSLogConfig>;
export declare const setZWaveJSLogLevel: (hass: HomeAssistant, entry_id: string, level: string) => Promise<ZWaveJSLogConfig>;
export interface ZWaveJSIntegrationSettings {
    installer_mode: boolean;
}
export declare const fetchZwaveIntegrationSettings: (hass: HomeAssistant) => Promise<ZWaveJSIntegrationSettings>;
export declare const cancelSecureBootstrapS2: (hass: HomeAssistant, entry_id: string) => Promise<void>;
export {};
