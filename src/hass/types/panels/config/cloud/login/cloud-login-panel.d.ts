import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-next";
import "../../../../components/ha-list";
import "../../../../components/ha-list-item";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
import "../../ha-config-section";
import "./cloud-login";
export declare class CloudLoginPanel extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    email?: string;
    flashMessage?: string;
    private _cloudLoginElement;
    protected render(): TemplateResult;
    private _handleForgotPassword;
    private _handleRegister;
    private _dismissFlash;
    private _handleMenuAction;
    private _deleteCloudData;
    private _downloadSupportPackage;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-login-panel": CloudLoginPanel;
    }
    interface HASSDomEvents {
        "cloud-email-changed": {
            value: string;
        };
        "flash-message-changed": {
            value: string;
        };
    }
}
