import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { TimeTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaTimeTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: TimeTrigger;
    disabled: boolean;
    private _inputMode;
    static get defaultConfig(): TimeTrigger;
    private _schema;
    willUpdate(changedProperties: PropertyValues): void;
    private _data;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-time": HaTimeTrigger;
    }
}
