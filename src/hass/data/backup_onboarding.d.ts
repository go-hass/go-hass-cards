import type { BackupContentExtended } from "./backup";
import type { BackupManagerState, RestoreBackupStage, RestoreBackupState } from "./backup_manager";
export interface BackupOnboardingInfo {
    state: BackupManagerState;
    last_action_event?: {
        manager_state: BackupManagerState;
        stage: RestoreBackupStage | null;
        state: RestoreBackupState;
        reason: string | null;
    } | null;
}
export interface BackupOnboardingConfig extends BackupOnboardingInfo {
    backups: BackupContentExtended[];
}
export declare const fetchBackupOnboardingInfo: () => Promise<BackupOnboardingConfig>;
export interface RestoreOnboardingBackupParams {
    backup_id: string;
    agent_id: string;
    password?: string;
    restore_addons?: string[];
    restore_database?: boolean;
    restore_folders?: string[];
}
export declare const restoreOnboardingBackup: (params: RestoreOnboardingBackupParams) => Promise<unknown>;
export declare const uploadOnboardingBackup: (file: File, agentIds: string[]) => Promise<{
    backup_id: string;
}>;
