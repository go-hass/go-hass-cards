import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { NumericStateTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaNumericStateTrigger extends LitElement {
    hass: HomeAssistant;
    trigger: NumericStateTrigger;
    disabled: boolean;
    private _inputAboveIsEntity?;
    private _inputBelowIsEntity?;
    private _schema;
    willUpdate(changedProperties: PropertyValues): void;
    static get defaultConfig(): NumericStateTrigger;
    private _data;
    render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-numeric_state": HaNumericStateTrigger;
    }
}
