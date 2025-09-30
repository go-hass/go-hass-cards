import { LitElement, nothing } from "lit";
import type { LocalizeKeys } from "../common/translations/localize";
import "../components/ha-button";
import "../components/ha-icon-button";
import "../components/ha-toast";
import type { HomeAssistant } from "../types";
export interface ShowToastParams {
    id?: string;
    message: string | {
        translationKey: LocalizeKeys;
        args?: Record<string, string>;
    };
    action?: ToastActionParams;
    duration?: number;
    dismissable?: boolean;
}
export interface ToastActionParams {
    action: () => void;
    text: string | {
        translationKey: LocalizeKeys;
        args?: Record<string, string>;
    };
}
declare class NotificationManager extends LitElement {
    hass: HomeAssistant;
    private _parameters?;
    private _toast;
    showDialog(parameters: ShowToastParams): Promise<void>;
    private _toastClosed;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _buttonClicked;
}
declare global {
    interface HTMLElementTagNameMap {
        "notification-manager": NotificationManager;
    }
    interface HASSDomEvents {
        "hass-notification": ShowToastParams;
    }
}
export {};
