import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-svg-icon";
export declare class HuiWarningElement extends LitElement {
    label?: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-warning-element": HuiWarningElement;
    }
}
