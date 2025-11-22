import { LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-password-field";
import "../../../components/ha-svg-icon";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
export declare class CloudStepSignin extends LitElement {
    hass: HomeAssistant;
    private _requestInProgress;
    private _error?;
    private _checkConnection;
    private _emailField;
    private _passwordField;
    render(): import("lit-html").TemplateResult<1>;
    private _keyDown;
    private _handleLogin;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-step-signin": CloudStepSignin;
    }
}
