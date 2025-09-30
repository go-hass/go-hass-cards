import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-card";
import "../../components/ha-button";
import "../../components/ha-spinner";
import "../../components/ha-textfield";
import "../../components/ha-password-field";
import type { HomeAssistant } from "../../types";
import "../../components/ha-alert";
import type { RefreshToken } from "../../data/refresh_token";
declare class HaChangePasswordCard extends LitElement {
    hass: HomeAssistant;
    private _loading;
    private _statusMsg?;
    private _errorMsg?;
    private _currentPassword;
    private _password;
    private _passwordConfirm;
    refreshTokens?: RefreshToken[];
    protected render(): TemplateResult;
    private _currentPasswordChanged;
    private _newPasswordChanged;
    private _newPasswordConfirmChanged;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _changePassword;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-change-password-card": HaChangePasswordCard;
    }
}
export {};
