import type { BackupContent } from "../../../../data/backup";
export interface DownloadDecryptedBackupDialogParams {
    backup: BackupContent;
    agentId?: string;
}
export declare const loadDownloadDecryptedBackupDialog: () => Promise<typeof import("./dialog-download-decrypted-backup")>;
export declare const showDownloadDecryptedBackupDialog: (element: HTMLElement, params: DownloadDecryptedBackupDialogParams) => void;
