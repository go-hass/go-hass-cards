import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-ripple";
export declare class HaControlButton extends LitElement {
    disabled: boolean;
    label?: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-button": HaControlButton;
    }
}
