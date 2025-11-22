import { LitElement, nothing } from "lit";
import type { PersitentNotificationEntity } from "../../data/persistent_notification";
import type { HomeAssistant } from "../../types";
import "../../components/ha-button";
import "./notification-item-template";
export declare class HuiConfiguratorNotificationItem extends LitElement {
    hass?: HomeAssistant;
    notification?: PersitentNotificationEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleClick;
}
declare global {
    interface HTMLElementTagNameMap {
        "configurator-notification-item": HuiConfiguratorNotificationItem;
    }
}
