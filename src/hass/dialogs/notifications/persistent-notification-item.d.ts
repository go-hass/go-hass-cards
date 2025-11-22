import { LitElement, nothing } from "lit";
import "../../components/ha-markdown";
import "../../components/ha-relative-time";
import "../../components/ha-tooltip";
import "../../components/ha-button";
import type { PersistentNotification } from "../../data/persistent_notification";
import type { HomeAssistant } from "../../types";
import "./notification-item-template";
export declare class HuiPersistentNotificationItem extends LitElement {
    hass?: HomeAssistant;
    notification?: PersistentNotification;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    private _handleDismiss;
    private _computeTooltip;
}
declare global {
    interface HTMLElementTagNameMap {
        "persistent-notification-item": HuiPersistentNotificationItem;
    }
}
