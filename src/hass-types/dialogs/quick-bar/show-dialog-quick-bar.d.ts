export declare const enum QuickBarMode {
    Command = "command",
    Device = "device",
    Entity = "entity"
}
export interface QuickBarParams {
    entityFilter?: string;
    mode?: QuickBarMode;
    hint?: string;
}
export declare const loadQuickBar: () => Promise<typeof import("./ha-quick-bar")>;
export declare const showQuickBar: (element: HTMLElement, dialogParams: QuickBarParams) => void;
