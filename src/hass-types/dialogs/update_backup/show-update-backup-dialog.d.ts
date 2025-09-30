export interface UpdateBackupDialogParams {
    submit?: (response: boolean) => void;
    cancel?: () => void;
}
export declare const showUpdateBackupDialogParams: (element: HTMLElement, dialogParams: UpdateBackupDialogParams) => Promise<boolean>;
