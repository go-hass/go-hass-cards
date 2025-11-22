import type { BackupConfig } from "../../../../data/backup";
export type NewBackupType = "automatic" | "manual";
export interface NewBackupDialogParams {
    config: BackupConfig;
    submit?: (type: NewBackupType) => void;
    cancel?: () => void;
}
export declare const loadNewBackupDialog: () => Promise<typeof import("./dialog-new-backup")>;
export declare const showNewBackupDialog: (element: HTMLElement, params: NewBackupDialogParams) => Promise<NewBackupType>;
