import { LitElement } from "lit";
import "./ha-ripple";
type BadgeType = "badge" | "button";
export declare class HaBadge extends LitElement {
    type: BadgeType;
    label?: string;
    iconOnly: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-badge": HaBadge;
    }
}
export {};
