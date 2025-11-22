import type { Lovelace } from "../types";
declare global {
    interface HASSDomEvents {
        "show-save-config": SaveDialogParams;
    }
}
export interface SaveDialogParams {
    lovelace: Lovelace;
    mode: "yaml" | "storage";
    narrow: boolean;
}
export declare const showSaveDialog: (element: HTMLElement, saveDialogParams: SaveDialogParams) => void;
