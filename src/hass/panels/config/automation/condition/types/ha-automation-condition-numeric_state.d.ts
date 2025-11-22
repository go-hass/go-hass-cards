import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { NumericStateCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export default class HaNumericStateCondition extends LitElement {
    hass: HomeAssistant;
    condition: NumericStateCondition;
    disabled: boolean;
    private _inputAboveIsEntity?;
    private _inputBelowIsEntity?;
    static get defaultConfig(): NumericStateCondition;
    shouldUpdate(changedProperties: PropertyValues): boolean;
    private _data;
    private _schema;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-numeric_state": HaNumericStateCondition;
    }
}
