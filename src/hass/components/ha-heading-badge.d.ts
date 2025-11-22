import { LitElement } from "lit";
type HeadingBadgeType = "text" | "button";
export declare class HaBadge extends LitElement {
    type: HeadingBadgeType;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-heading-badge": HaBadge;
    }
}
export {};
