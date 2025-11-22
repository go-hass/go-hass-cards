import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-ripple";
export declare class HaTab extends LitElement {
    active: boolean;
    narrow: boolean;
    name?: string;
    protected render(): TemplateResult;
    private _handleKeyDown;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tab": HaTab;
    }
}
