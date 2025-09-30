export interface MatterOpenCommissioningWindowDialogParams {
    device_id: string;
}
export declare const loadOpenCommissioningWindowDialog: () => Promise<typeof import("./dialog-matter-open-commissioning-window")>;
export declare const showMatterOpenCommissioningWindowDialog: (element: HTMLElement, dialogParams: MatterOpenCommissioningWindowDialogParams) => void;
