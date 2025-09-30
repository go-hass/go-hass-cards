import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-icon";
export declare class HaTileBadge extends LitElement {
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tile-badge": HaTileBadge;
    }
}
