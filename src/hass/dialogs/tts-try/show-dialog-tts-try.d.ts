export interface TTSTryDialogParams {
    engine: string;
    language?: string;
    voice?: string;
}
export declare const loadTTSTryDialog: () => Promise<typeof import("./dialog-tts-try")>;
export declare const showTTSTryDialog: (element: HTMLElement, dialogParams: TTSTryDialogParams) => void;
