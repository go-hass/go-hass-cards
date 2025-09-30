import type { TemplateResult } from "lit";
import { LitElement } from "lit";
export declare class HaIconButtonGroup extends LitElement {
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-group": HaIconButtonGroup;
    }
}
