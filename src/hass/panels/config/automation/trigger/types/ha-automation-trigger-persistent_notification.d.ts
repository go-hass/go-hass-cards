import { LitElement } from "lit";
import "../../../../../components/ha-button-menu";
import "../../../../../components/ha-check-list-item";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-textfield";
import type { PersistentNotificationTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
import "../../../../../components/ha-form/ha-form";
export declare class HaPersistentNotificationTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: PersistentNotificationTrigger;
    disabled: boolean;
    private _schema;
    static get defaultConfig(): PersistentNotificationTrigger;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-persistent_notification": HaPersistentNotificationTrigger;
    }
}
