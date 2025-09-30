export interface ZWaveJSRemoveNodeDialogParams {
    entryId: string;
    deviceId?: string;
    skipConfirmation?: boolean;
    onClose?: () => void;
}
export declare const loadRemoveNodeDialog: () => Promise<typeof import("./dialog-zwave_js-remove-node")>;
export declare const showZWaveJSRemoveNodeDialog: (element: HTMLElement, removeNodeDialogParams: ZWaveJSRemoveNodeDialogParams) => void;
