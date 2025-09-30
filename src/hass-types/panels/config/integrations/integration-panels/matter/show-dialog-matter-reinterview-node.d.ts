export interface MatterReinterviewNodeDialogParams {
    device_id: string;
}
export declare const loadReinterviewNodeDialog: () => Promise<typeof import("./dialog-matter-reinterview-node")>;
export declare const showMatterReinterviewNodeDialog: (element: HTMLElement, reinterviewNodeDialogParams: MatterReinterviewNodeDialogParams) => void;
