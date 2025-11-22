export interface SetBackupEncryptionKeyDialogParams {
    submit?: (key: boolean) => void;
    cancel?: () => void;
    saveKey: (key: string) => any;
}
export declare const showSetBackupEncryptionKeyDialog: (element: HTMLElement, params?: SetBackupEncryptionKeyDialogParams) => Promise<boolean>;
