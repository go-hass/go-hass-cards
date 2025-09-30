import { LitElement } from "lit";
/**
 * @attribute active
 * @attribute track
 */
export declare class HatGraphSpacer extends LitElement {
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-graph-spacer": HatGraphSpacer;
    }
}
