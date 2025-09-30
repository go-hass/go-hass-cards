import { LitElement } from "lit";
export declare class HaConfigSection extends LitElement {
    isWide: boolean;
    vertical: boolean;
    fullWidth: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section": HaConfigSection;
    }
}
