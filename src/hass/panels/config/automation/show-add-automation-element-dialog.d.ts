export declare const PASTE_VALUE = "__paste__";
export interface AddAutomationElementDialogParams {
    type: "trigger" | "condition" | "action";
    add: (key: string) => void;
    clipboardItem: string | undefined;
}
export declare const showAddAutomationElementDialog: (element: HTMLElement, dialogParams: AddAutomationElementDialogParams) => void;
