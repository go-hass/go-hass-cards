import { TextAreaBase } from "@material/mwc-textarea/mwc-textarea-base";
import type { PropertyValues } from "lit";
export declare class HaTextArea extends TextAreaBase {
    autogrow: boolean;
    updated(changedProperties: PropertyValues): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-textarea": HaTextArea;
    }
}
