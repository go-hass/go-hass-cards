export interface ZWaveJSReinterviewNodeDialogParams {
    device_id: string;
}
export declare const loadReinterviewNodeDialog: () => Promise<typeof import("./dialog-zwave_js-reinterview-node")>;
export declare const showZWaveJSReinterviewNodeDialog: (element: HTMLElement, reinterviewNodeDialogParams: ZWaveJSReinterviewNodeDialogParams) => void;
