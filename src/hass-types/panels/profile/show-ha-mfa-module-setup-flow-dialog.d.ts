export interface MfaModuleSetupFlowDialogParams {
    continueFlowId?: string;
    mfaModuleId?: string;
    dialogClosedCallback: (params: {
        flowFinished: boolean;
    }) => void;
}
export declare const loadMfaModuleSetupFlowDialog: () => Promise<typeof import("./dialog-ha-mfa-module-setup-flow")>;
export declare const showMfaModuleSetupFlowDialog: (element: HTMLElement, dialogParams: MfaModuleSetupFlowDialogParams) => void;
