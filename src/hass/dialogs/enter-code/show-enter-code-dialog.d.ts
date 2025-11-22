export interface EnterCodeDialogParams {
    codeFormat: "text" | "number";
    codePattern?: string;
    submitText?: string;
    cancelText?: string;
    title?: string;
    submit?: (code?: string) => void;
    cancel?: () => void;
}
export declare const showEnterCodeDialog: (element: HTMLElement, dialogParams: EnterCodeDialogParams) => Promise<string>;
