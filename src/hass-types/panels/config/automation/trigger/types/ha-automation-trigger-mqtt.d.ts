import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { MqttTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaMQTTTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: MqttTrigger;
    disabled: boolean;
    static get defaultConfig(): MqttTrigger;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-mqtt": HaMQTTTrigger;
    }
}
