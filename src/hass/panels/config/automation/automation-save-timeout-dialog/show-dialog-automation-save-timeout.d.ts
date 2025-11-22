export declare const loadAutomationSaveTimeoutDialog: () => Promise<typeof import("./dialog-automation-save-timeout")>;
export interface AutomationSaveTimeoutDialogParams {
    onClose?: () => void;
    savedPromise: Promise<any>;
    type: "automation" | "script";
}
export declare const showAutomationSaveTimeoutDialog: (element: HTMLElement, dialogParams: AutomationSaveTimeoutDialogParams) => Promise<void>;
