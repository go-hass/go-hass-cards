export interface MatterManageFabricsDialogParams {
    device_id: string;
}
export declare const loadManageFabricsDialog: () => Promise<typeof import("./dialog-matter-manage-fabrics")>;
export declare const showMatterManageFabricsDialog: (element: HTMLElement, dialogParams: MatterManageFabricsDialogParams) => void;
