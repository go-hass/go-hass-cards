export interface UploadBackupDialogParams {
    submit?: () => void;
    cancel?: () => void;
}
export declare const loadUploadBackupDialog: () => Promise<typeof import("./dialog-upload-backup")>;
export declare const showUploadBackupDialog: (element: HTMLElement, params: UploadBackupDialogParams) => Promise<null>;
