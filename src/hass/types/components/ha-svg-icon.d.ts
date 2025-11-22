import type { SVGTemplateResult } from "lit";
import { LitElement } from "lit";
export declare class HaSvgIcon extends LitElement {
    path?: string;
    secondaryPath?: string;
    viewBox?: string;
    protected render(): SVGTemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-svg-icon": HaSvgIcon;
    }
}
