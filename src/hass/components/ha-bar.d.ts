import type { TemplateResult } from "lit";
import { LitElement } from "lit";
export declare class HaBar extends LitElement {
    min: number;
    max: number;
    value: number;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-bar": HaBar;
    }
}
