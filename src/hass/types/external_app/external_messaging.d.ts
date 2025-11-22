import type { NavigateOptions } from "../common/navigate";
import type { AutomationConfig } from "../data/automation";
interface CommandInFlight {
    resolve: (data: any) => void;
    reject: (err: EMError) => void;
}
export interface EMMessage {
    id?: number;
    type: string;
}
interface EMError {
    code: string;
    message: string;
}
interface EMMessageResultSuccess {
    id: number;
    type: "result";
    success: true;
    result: unknown;
}
interface EMMessageResultError {
    id: number;
    type: "result";
    success: false;
    error: EMError;
}
interface EMOutgoingMessageConfigGet extends EMMessage {
    type: "config/get";
}
interface EMOutgoingMessageBarCodeScan extends EMMessage {
    type: "bar_code/scan";
    payload: {
        title: string;
        description: string;
        alternative_option_label?: string;
    };
}
interface EMOutgoingMessageBarCodeClose extends EMMessage {
    type: "bar_code/close";
}
interface EMOutgoingMessageBarCodeNotify extends EMMessage {
    type: "bar_code/notify";
    payload: {
        message: string;
    };
}
interface EMOutgoingMessageMatterCommission extends EMMessage {
    type: "matter/commission";
    payload?: {
        mac_extended_address: string | null;
        extended_pan_id: string | null;
        border_agent_id: string | null;
        active_operational_dataset: string | null;
    };
}
interface EMOutgoingMessageImportThreadCredentials extends EMMessage {
    type: "thread/import_credentials";
}
interface EMOutgoingMessageWithAnswer {
    "config/get": {
        request: EMOutgoingMessageConfigGet;
        response: ExternalConfig;
    };
}
interface EMOutgoingMessageExoplayerPlayHLS extends EMMessage {
    type: "exoplayer/play_hls";
    payload: {
        url: string;
        muted: boolean;
    };
}
interface EMOutgoingMessageExoplayerResize extends EMMessage {
    type: "exoplayer/resize";
    payload: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
}
interface EMOutgoingMessageExoplayerStop extends EMMessage {
    type: "exoplayer/stop";
}
interface EMOutgoingMessageThemeUpdate extends EMMessage {
    type: "theme-update";
}
interface EMOutgoingMessageHaptic extends EMMessage {
    type: "haptic";
    payload: {
        hapticType: string;
    };
}
interface EMOutgoingMessageConnectionStatus extends EMMessage {
    type: "connection-status";
    payload: {
        event: string;
    };
}
interface EMOutgoingMessageAppConfiguration extends EMMessage {
    type: "config_screen/show";
}
interface EMOutgoingMessageTagWrite extends EMMessage {
    type: "tag/write";
    payload: {
        name: string | null;
        tag: string;
    };
}
interface EMOutgoingMessageSidebarShow extends EMMessage {
    type: "sidebar/show";
}
interface EMOutgoingMessageAssistShow extends EMMessage {
    type: "assist/show";
    payload?: {
        pipeline_id: "preferred" | "last_used" | string;
        start_listening: boolean;
    };
}
interface EMOutgoingMessageImprovScan extends EMMessage {
    type: "improv/scan";
}
interface EMOutgoingMessageImprovConfigureDevice extends EMMessage {
    type: "improv/configure_device";
    payload: {
        name: string;
    };
}
interface EMOutgoingMessageThreadStoreInPlatformKeychain extends EMMessage {
    type: "thread/store_in_platform_keychain";
    payload: {
        mac_extended_address: string | null;
        border_agent_id: string | null;
        active_operational_dataset: string;
        extended_pan_id: string;
    };
}
type EMOutgoingMessageWithoutAnswer = EMMessageResultError | EMMessageResultSuccess | EMOutgoingMessageAppConfiguration | EMOutgoingMessageAssistShow | EMOutgoingMessageBarCodeClose | EMOutgoingMessageBarCodeNotify | EMOutgoingMessageBarCodeScan | EMOutgoingMessageConnectionStatus | EMOutgoingMessageExoplayerPlayHLS | EMOutgoingMessageExoplayerResize | EMOutgoingMessageExoplayerStop | EMOutgoingMessageHaptic | EMOutgoingMessageImportThreadCredentials | EMOutgoingMessageMatterCommission | EMOutgoingMessageSidebarShow | EMOutgoingMessageTagWrite | EMOutgoingMessageThemeUpdate | EMOutgoingMessageThreadStoreInPlatformKeychain | EMOutgoingMessageImprovScan | EMOutgoingMessageImprovConfigureDevice;
export interface EMIncomingMessageRestart {
    id: number;
    type: "command";
    command: "restart";
}
export interface EMIncomingMessageNavigate {
    id: number;
    type: "command";
    command: "navigate";
    payload: {
        path: string;
        options?: NavigateOptions;
    };
}
export interface EMIncomingMessageShowNotifications {
    id: number;
    type: "command";
    command: "notifications/show";
}
export interface EMIncomingMessageToggleSidebar {
    id: number;
    type: "command";
    command: "sidebar/toggle";
}
export interface EMIncomingMessageShowSidebar {
    id: number;
    type: "command";
    command: "sidebar/show";
}
export interface EMIncomingMessageShowAutomationEditor {
    id: number;
    type: "command";
    command: "automation/editor/show";
    payload?: {
        config?: Partial<AutomationConfig>;
    };
}
export interface EMIncomingMessageBarCodeScanResult {
    id: number;
    type: "command";
    command: "bar_code/scan_result";
    payload: {
        rawValue: string;
        format: "aztec" | "code_128" | "code_39" | "code_93" | "codabar" | "data_matrix" | "ean_13" | "ean_8" | "itf" | "pdf417" | "qr_code" | "upc_a" | "upc_e" | "unknown";
    };
}
export interface EMIncomingMessageBarCodeScanAborted {
    id: number;
    type: "command";
    command: "bar_code/aborted";
    payload: {
        reason: "canceled" | "alternative_options";
    };
}
export interface ImprovDiscoveredDevice {
    name: string;
}
export interface EMIncomingMessageImprovDeviceDiscovered extends EMMessage {
    id: number;
    type: "command";
    command: "improv/discovered_device";
    payload: ImprovDiscoveredDevice;
}
export interface EMIncomingMessageImprovDeviceSetupDone extends EMMessage {
    id: number;
    type: "command";
    command: "improv/device_setup_done";
}
export type EMIncomingMessageCommands = EMIncomingMessageRestart | EMIncomingMessageNavigate | EMIncomingMessageShowNotifications | EMIncomingMessageToggleSidebar | EMIncomingMessageShowSidebar | EMIncomingMessageShowAutomationEditor | EMIncomingMessageBarCodeScanResult | EMIncomingMessageBarCodeScanAborted | EMIncomingMessageImprovDeviceDiscovered | EMIncomingMessageImprovDeviceSetupDone;
type EMIncomingMessage = EMMessageResultSuccess | EMMessageResultError | EMIncomingMessageCommands;
type EMIncomingMessageHandler = (msg: EMIncomingMessageCommands) => boolean;
export interface ExternalConfig {
    hasSettingsScreen: boolean;
    hasSidebar: boolean;
    canWriteTag: boolean;
    hasExoPlayer: boolean;
    canCommissionMatter: boolean;
    canImportThreadCredentials: boolean;
    canTransferThreadCredentialsToKeychain: boolean;
    hasAssist: boolean;
    hasBarCodeScanner: number;
    canSetupImprov: boolean;
    downloadFileSupported: boolean;
    appVersion: string;
}
export declare class ExternalMessaging {
    config: ExternalConfig;
    commands: Record<number, CommandInFlight>;
    msgId: number;
    private _commandHandler?;
    attach(): Promise<void>;
    addCommandHandler(handler: EMIncomingMessageHandler): void;
    /**
     * Send message to external app that expects a response.
     * @param msg message to send
     */
    sendMessage<T extends keyof EMOutgoingMessageWithAnswer>(msg: EMOutgoingMessageWithAnswer[T]["request"]): Promise<EMOutgoingMessageWithAnswer[T]["response"]>;
    /**
     * Send message to external app without expecting a response.
     * @param msg message to send
     */
    fireMessage(msg: EMOutgoingMessageWithoutAnswer): void;
    receiveMessage(msg: EMIncomingMessage): void;
    protected _sendExternal(msg: EMMessage): void;
}
export {};
