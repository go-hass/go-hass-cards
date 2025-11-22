import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { PersistentNotification } from "../../data/persistent_notification";
import type { HomeAssistant } from "../../types";
import "./configurator-notification-item";
import "./persistent-notification-item";
export declare class HuiNotificationItem extends LitElement {
    hass?: HomeAssistant;
    notification?: HassEntity | PersistentNotification;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "notification-item": HuiNotificationItem;
    }
}
