export declare const loadHelperDetailDialog: () => Promise<typeof import("./dialog-helper-detail")>;
export interface ShowDialogHelperDetailParams {
    domain?: string;
    dialogClosedCallback?: (params: {
        flowFinished: boolean;
        entryId?: string;
        entityId?: string;
    }) => void;
}
export declare const showHelperDetailDialog: (element: HTMLElement, params: ShowDialogHelperDetailParams) => void;
