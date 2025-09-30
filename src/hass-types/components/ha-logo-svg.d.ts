import type { TemplateResult } from "lit";
import { LitElement } from "lit";
export declare class HaLogoSvg extends LitElement {
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-logo-svg": HaLogoSvg;
    }
}
