import { LitElement } from "lit";
export declare class HaMdDivider extends LitElement {
    label?: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-divider": HaMdDivider;
    }
}
