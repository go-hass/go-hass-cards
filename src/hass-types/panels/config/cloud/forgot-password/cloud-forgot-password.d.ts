import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./cloud-forgot-password-card";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
export declare class CloudForgotPassword extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    email?: string;
    _requestInProgress: boolean;
    protected render(): TemplateResult;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-forgot-password": CloudForgotPassword;
    }
}
