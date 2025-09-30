import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
export declare class CloudStepIntro extends LitElement {
    hass: HomeAssistant;
    render(): import("lit-html").TemplateResult<1>;
    private _signUp;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-step-intro": CloudStepIntro;
    }
}
