import type { TemplateResult } from "lit";
import { LitElement } from "lit";
export declare class HaControlButtonGroup extends LitElement {
    vertical: boolean;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-button-group": HaControlButtonGroup;
    }
}
