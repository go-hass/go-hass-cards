import type { HassConfig } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
import type { BackupManagerState, ManagerStateEvent } from "./backup_manager";
import type { FrontendLocaleData } from "./translation";
export declare const enum BackupScheduleRecurrence {
    NEVER = "never",
    DAILY = "daily",
    CUSTOM_DAYS = "custom_days"
}
export type BackupDay = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
export declare const BACKUP_DAYS: BackupDay[];
export declare const sortWeekdays: (weekdays: any) => any;
export interface Retention {
    copies?: number | null;
    days?: number | null;
}
export interface BackupConfig {
    automatic_backups_configured: boolean;
    last_attempted_automatic_backup: string | null;
    last_completed_automatic_backup: string | null;
    next_automatic_backup: string | null;
    next_automatic_backup_additional?: boolean;
    create_backup: {
        agent_ids: string[];
        include_addons: string[] | null;
        include_all_addons: boolean;
        include_database: boolean;
        include_folders: string[] | null;
        name: string | null;
        password: string | null;
    };
    retention: Retention;
    schedule: {
        recurrence: BackupScheduleRecurrence;
        time?: string | null;
        days: BackupDay[];
    };
    agents: BackupAgentsConfig;
}
export interface BackupMutableConfig {
    automatic_backups_configured?: boolean;
    create_backup?: {
        agent_ids?: string[];
        include_addons?: string[];
        include_all_addons?: boolean;
        include_database?: boolean;
        include_folders?: string[];
        name?: string | null;
        password?: string | null;
    };
    retention?: Retention;
    schedule?: {
        recurrence: BackupScheduleRecurrence;
        time?: string | null;
        days?: BackupDay[] | null;
    };
    agents?: BackupAgentsConfig;
}
export type BackupAgentsConfig = Record<string, BackupAgentConfig>;
export interface BackupAgentConfig {
    protected?: boolean;
    retention?: Retention | null;
}
export interface BackupAgent {
    agent_id: string;
    name: string;
}
export interface BackupContentAgent {
    size: number;
    protected: boolean;
}
export interface AddonInfo {
    name: string | null;
    slug: string;
    version: string | null;
}
export interface BackupContent {
    backup_id: string;
    date: string;
    name: string;
    agents: Record<string, BackupContentAgent>;
    failed_agent_ids?: string[];
    failed_addons?: AddonInfo[];
    failed_folders?: string[];
    extra_metadata?: {
        "supervisor.addon_update"?: string;
    };
    with_automatic_settings: boolean;
}
export interface BackupData {
    addons: BackupAddon[];
    database_included: boolean;
    folders: string[];
    homeassistant_version: string;
    homeassistant_included: boolean;
}
export interface BackupAddon {
    name: string;
    slug: string;
    version: string;
}
export interface BackupContentExtended extends BackupContent, BackupData {
}
export interface BackupInfo {
    backups: BackupContent[];
    agent_errors: Record<string, string>;
    last_attempted_automatic_backup: string | null;
    last_completed_automatic_backup: string | null;
    last_action_event: ManagerStateEvent | null;
    next_automatic_backup: string | null;
    next_automatic_backup_additional: boolean;
    state: BackupManagerState;
}
export interface BackupDetails {
    backup: BackupContentExtended;
}
export interface BackupAgentsInfo {
    agents: BackupAgent[];
}
export interface GenerateBackupParams {
    agent_ids: string[];
    include_addons?: string[];
    include_all_addons?: boolean;
    include_database?: boolean;
    include_folders?: string[];
    include_homeassistant?: boolean;
    name?: string;
    password?: string;
}
export interface RestoreBackupParams {
    backup_id: string;
    agent_id: string;
    password?: string;
    restore_addons?: string[];
    restore_database?: boolean;
    restore_folders?: string[];
    restore_homeassistant?: boolean;
}
export declare const fetchBackupConfig: (hass: HomeAssistant) => Promise<{
    config: BackupConfig;
}>;
export declare const updateBackupConfig: (hass: HomeAssistant, config: BackupMutableConfig) => Promise<unknown>;
export declare const getBackupDownloadUrl: (id: string, agentId: string, password?: string | null) => string;
export declare const fetchBackupInfo: (hass: HomeAssistant) => Promise<BackupInfo>;
export declare const fetchBackupDetails: (hass: HomeAssistant, id: string) => Promise<BackupDetails>;
export declare const fetchBackupAgentsInfo: (hass: HomeAssistant) => Promise<BackupAgentsInfo>;
export declare const deleteBackup: (hass: HomeAssistant, id: string) => Promise<void>;
export declare const generateBackup: (hass: HomeAssistant, params: GenerateBackupParams) => Promise<{
    backup_id: string;
}>;
export declare const generateBackupWithAutomaticSettings: (hass: HomeAssistant) => Promise<void>;
export declare const restoreBackup: (hass: HomeAssistant, params: RestoreBackupParams) => Promise<{
    backup_id: string;
}>;
export declare const uploadBackup: (hass: HomeAssistant, file: File, agentIds: string[]) => Promise<{
    backup_id: string;
}>;
export declare const getPreferredAgentForDownload: (agents: string[]) => string;
export declare const canDecryptBackupOnDownload: (hass: HomeAssistant, backup_id: string, agent_id: string, password: string) => Promise<unknown>;
export declare const CORE_LOCAL_AGENT = "backup.local";
export declare const HASSIO_LOCAL_AGENT = "hassio.local";
export declare const CLOUD_AGENT = "cloud.cloud";
export declare const isLocalAgent: (agentId: string) => boolean;
export declare const isNetworkMountAgent: (agentId: string) => boolean;
export declare const computeBackupAgentName: (localize: LocalizeFunc, agentId: string, agents: BackupAgent[]) => string;
export declare const computeBackupSize: (backup: BackupContent) => number;
export type BackupType = "automatic" | "manual" | "addon_update";
export declare const getBackupTypes: (isHassio: boolean) => BackupType[];
export declare const computeBackupType: (backup: BackupContent, isHassio: boolean) => BackupType;
export declare const compareAgents: (a: string, b: string) => number;
export declare const generateEncryptionKey: () => string;
export declare const generateEmergencyKit: (hass: HomeAssistant, encryptionKey: string) => string;
export declare const geneateEmergencyKitFileName: (hass: HomeAssistant, append?: string) => string;
export declare const downloadEmergencyKit: (hass: HomeAssistant, key: string, appendFileName?: string) => void;
export declare const DEFAULT_OPTIMIZED_BACKUP_START_TIME: Date;
export declare const DEFAULT_OPTIMIZED_BACKUP_END_TIME: Date;
export declare const getFormattedBackupTime: import("memoize-one").MemoizedFn<(locale: FrontendLocaleData, config: HassConfig, backupTime?: Date | string | null) => string>;
export declare const SUPPORTED_UPLOAD_FORMAT = "application/x-tar";
export interface BackupUploadFileFormData {
    file?: File;
}
export declare const INITIAL_UPLOAD_FORM_DATA: BackupUploadFileFormData;
