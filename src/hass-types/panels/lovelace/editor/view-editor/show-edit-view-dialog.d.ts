import type { HASSDomEvent } from "../../../../common/dom/fire_event";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { Lovelace } from "../../types";
declare global {
    interface HASSDomEvents {
        "reload-lovelace": undefined;
        "show-edit-view": EditViewDialogParams;
    }
    interface HTMLElementEventMap {
        "reload-lovelace": HASSDomEvent<undefined>;
    }
}
export interface EditViewDialogParams {
    lovelace: Lovelace;
    viewIndex?: number;
    saveCallback?: (viewIndex: number, viewConfig: LovelaceViewConfig) => void;
}
export declare const showEditViewDialog: (element: HTMLElement, editViewDialogParams: EditViewDialogParams) => void;
