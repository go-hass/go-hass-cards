export interface MatterPingNodeDialogParams {
    device_id: string;
}
export declare const loadPingNodeDialog: () => Promise<typeof import("./dialog-matter-ping-node")>;
export declare const showMatterPingNodeDialog: (element: HTMLElement, pingNodeDialogParams: MatterPingNodeDialogParams) => void;
