import { LitElement } from "lit";
export declare class HaDialogHeader extends LitElement {
    subtitlePosition: "above" | "below";
    showBorder: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-header": HaDialogHeader;
    }
}
