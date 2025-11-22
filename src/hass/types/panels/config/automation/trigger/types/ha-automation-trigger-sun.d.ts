import { LitElement } from "lit";
import type { SunTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
import "../../../../../components/ha-form/ha-form";
export declare class HaSunTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: SunTrigger;
    disabled: boolean;
    private _schema;
    static get defaultConfig(): SunTrigger;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-sun": HaSunTrigger;
    }
}
