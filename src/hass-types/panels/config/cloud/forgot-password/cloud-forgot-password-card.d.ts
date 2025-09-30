import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/buttons/ha-progress-button";
import "../../../../components/ha-alert";
import "../../../../components/ha-card";
import type { HaTextField } from "../../../../components/ha-textfield";
import "../../../../components/ha-textfield";
import type { LocalizeFunc } from "../../../../common/translations/localize";
import type { HomeAssistant } from "../../../../types";
export declare class CloudForgotPasswordCard extends LitElement {
    hass?: HomeAssistant;
    localize: LocalizeFunc;
    translationKeyPanel: "page-onboarding.restore.ha-cloud.forgot_password" | "config.cloud.forgot_password";
    email?: string;
    cardLess: boolean;
    private _inProgress;
    private _error?;
    emailField: HaTextField;
    protected render(): TemplateResult;
    private _renderContent;
    private _keyDown;
    private _resetPassword;
    private _handleEmailPasswordReset;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-forgot-password-card": CloudForgotPasswordCard;
    }
}
