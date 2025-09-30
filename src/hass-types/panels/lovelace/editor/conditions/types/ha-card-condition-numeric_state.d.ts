import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../../types";
import type { NumericStateCondition, StateCondition } from "../../../common/validate-condition";
export declare class HaCardConditionNumericState extends LitElement {
    hass: HomeAssistant;
    condition: NumericStateCondition;
    disabled: boolean;
    static get defaultConfig(): NumericStateCondition;
    protected static validateUIConfig(condition: StateCondition): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-numeric_state": HaCardConditionNumericState;
    }
}
