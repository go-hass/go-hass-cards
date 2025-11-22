export interface SSDPRawDataDialogParams {
    key: string;
    data: Record<string, unknown>;
}
export declare const loadSSDPRawDataDialog: () => Promise<typeof import("./dialog-ssdp-raw-data")>;
export declare const showSSDPRawDataDialog: (element: HTMLElement, ssdpRawDataDialogParams: SSDPRawDataDialogParams) => void;
