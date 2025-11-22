import type { AutomationConfig } from "../../../../data/automation";
import type { ScriptConfig } from "../../../../data/script";
export declare const loadPasteReplaceDialog: () => Promise<typeof import("./dialog-paste-replace")>;
interface BasePasteReplaceDialogParams<D, T> {
    domain: D;
    pastedConfig: T;
    onClose: () => void;
    onAppend: () => void;
    onReplace: () => void;
}
export type PasteReplaceDialogParams = BasePasteReplaceDialogParams<"automation", AutomationConfig> | BasePasteReplaceDialogParams<"script", ScriptConfig>;
export declare const showPasteReplaceDialog: (element: HTMLElement, params: PasteReplaceDialogParams) => void;
export {};
