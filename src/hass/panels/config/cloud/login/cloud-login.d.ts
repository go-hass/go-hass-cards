import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/buttons/ha-progress-button";
import "../../../../components/ha-alert";
import "../../../../components/ha-card";
import "../../../../components/ha-button";
import "../../../../components/ha-password-field";
import "../../../../components/ha-textfield";
import type { HaTextField } from "../../../../components/ha-textfield";
import type { LocalizeFunc } from "../../../../common/translations/localize";
import type { HomeAssistant } from "../../../../types";
export declare class CloudLogin extends LitElement {
    hass?: HomeAssistant;
    checkConnection: boolean;
    email?: string;
    localize: LocalizeFunc;
    translationKeyPanel: "page-onboarding.restore.ha-cloud" | "config.cloud";
    cardLess: boolean;
    emailField: HaTextField;
    private _passwordField;
    private _error?;
    private _inProgress;
    protected render(): TemplateResult;
    private _renderLoginForm;
    private _keyDown;
    private _handleCloudLoginError;
    private _login;
    private _handleLogin;
    private _handleForgotPassword;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-login": CloudLogin;
    }
    interface HASSDomEvents {
        "cloud-login": {
            email: string;
            password: string;
        };
        "cloud-forgot-password": {
            email: string;
        };
    }
}
