import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-svg-icon";
import "../ha-tooltip";
declare class HaDataTableIcon extends LitElement {
    tooltip: string;
    path: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-data-table-icon": HaDataTableIcon;
    }
}
export {};
