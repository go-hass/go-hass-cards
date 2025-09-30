export interface NewAutomationDialogParams {
    mode: "script" | "automation";
}
export declare const loadNewAutomationDialog: () => Promise<typeof import("./dialog-new-automation")>;
export declare const showNewAutomationDialog: (element: HTMLElement, newAutomationDialogParams: NewAutomationDialogParams) => void;
