import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../../types";
import type { NotCondition, StateCondition } from "../../../common/validate-condition";
import "../ha-card-conditions-editor";
export declare class HaCardConditionNot extends LitElement {
    hass: HomeAssistant;
    condition: NotCondition;
    disabled: boolean;
    static get defaultConfig(): NotCondition;
    protected static validateUIConfig(condition: StateCondition): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-not": HaCardConditionNot;
    }
}
