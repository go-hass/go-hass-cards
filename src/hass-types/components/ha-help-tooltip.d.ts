import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-svg-icon";
import "./ha-tooltip";
export declare class HaHelpTooltip extends LitElement {
    label: string;
    position: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end";
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-help-tooltip": HaHelpTooltip;
    }
}
