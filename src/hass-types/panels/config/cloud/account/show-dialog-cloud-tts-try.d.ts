export interface TryTtsDialogParams {
    defaultVoice: [string, string];
}
export declare const loadTryTtsDialog: () => Promise<typeof import("./dialog-cloud-tts-try")>;
export declare const showTryTtsDialog: (element: HTMLElement, dialogParams: TryTtsDialogParams) => void;
