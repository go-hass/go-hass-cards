import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-settings-row";
import type { HomeAssistant } from "../../types";
declare class HaPushNotificationsRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-push-notifications-row": HaPushNotificationsRow;
    }
}
export {};
