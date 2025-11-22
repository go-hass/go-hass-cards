export interface ChangeBackupEncryptionKeyDialogParams {
    currentKey: string;
    submit?: (success: boolean) => void;
    cancel?: () => void;
    saveKey: (key: string) => any;
}
export declare const showChangeBackupEncryptionKeyDialog: (element: HTMLElement, params?: ChangeBackupEncryptionKeyDialogParams) => Promise<boolean>;
