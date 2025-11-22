export interface ZWaveJSAddNodeDialogParams {
    entry_id: string;
    longRangeSupported?: boolean;
    inclusionOngoing?: boolean;
    dsk?: string;
    onStop?: () => void;
}
export declare const loadAddNodeDialog: () => Promise<typeof import("./dialog-zwave_js-add-node")>;
export declare const showZWaveJSAddNodeDialog: (element: HTMLElement, addNodeDialogParams: ZWaveJSAddNodeDialogParams) => void;
