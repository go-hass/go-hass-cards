import type { BackupContentExtended, BackupData } from "../../../../data/backup";
export interface RestoreBackupDialogParams {
    backup: BackupContentExtended;
    selectedData: BackupData;
}
export declare const loadRestoreBackupDialog: () => Promise<typeof import("./dialog-restore-backup")>;
export declare const showRestoreBackupDialog: (element: HTMLElement, params: RestoreBackupDialogParams) => void;
