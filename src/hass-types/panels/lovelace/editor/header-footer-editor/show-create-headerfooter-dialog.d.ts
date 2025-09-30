import type { LovelaceHeaderFooterConfig } from "../../header-footer/types";
export interface CreateHeaderFooterDialogParams {
    pickHeaderFooter: (config: LovelaceHeaderFooterConfig) => void;
    type: "header" | "footer";
    entities?: string[];
}
export declare const showCreateHeaderFooterDialog: (element: HTMLElement, createHeaderFooterDialogParams: CreateHeaderFooterDialogParams) => void;
