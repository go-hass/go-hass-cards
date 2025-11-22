export interface DownloadLogsDialogParams {
    header?: string;
    provider: string;
    defaultLineCount?: number;
    boot: number;
}
export declare const showDownloadLogsDialog: (element: HTMLElement, dialogParams: DownloadLogsDialogParams) => void;
