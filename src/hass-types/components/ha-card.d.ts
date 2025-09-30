import { LitElement } from "lit";
export declare class HaCard extends LitElement {
    header?: string;
    raised: boolean;
    static styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card": HaCard;
    }
}
