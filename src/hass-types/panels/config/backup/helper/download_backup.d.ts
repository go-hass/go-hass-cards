import type { LitElement } from "lit";
import type { BackupConfig, BackupContent } from "../../../../data/backup";
import type { HomeAssistant } from "../../../../types";
export declare const downloadBackupFile: (hass: HomeAssistant, backupId: string, preferedAgent: string, encryptionKey?: string | null) => Promise<void>;
export declare const downloadBackup: (hass: HomeAssistant, element: LitElement, backup: BackupContent, backupConfig?: BackupConfig, agentId?: string) => Promise<void>;
