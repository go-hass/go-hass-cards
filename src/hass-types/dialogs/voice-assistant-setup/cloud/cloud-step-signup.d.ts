import { LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-password-field";
import "../../../components/ha-svg-icon";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
export declare class CloudStepSignup extends LitElement {
    hass: HomeAssistant;
    private _requestInProgress;
    private _email?;
    private _password?;
    private _error?;
    private _state?;
    private _emailField;
    private _passwordField;
    render(): import("lit-html").TemplateResult<1>;
    private _signIn;
    private _keyDown;
    private _handleRegister;
    private _handleResendVerifyEmail;
    private _verificationEmailSent;
    private _login;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-step-signup": CloudStepSignup;
    }
}
