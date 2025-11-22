export interface ZWaveJSHardResetControllerDialogParams {
    entryId: string;
}
export declare const loadHardResetControllerDialog: () => Promise<typeof import("./dialog-zwave_js-hard-reset-controller")>;
export declare const showZWaveJSHardResetControllerDialog: (element: HTMLElement, hardResetControllerDialogParams: ZWaveJSHardResetControllerDialogParams) => void;
