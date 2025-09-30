import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../../types";
import type { OrCondition, StateCondition } from "../../../common/validate-condition";
import "../ha-card-conditions-editor";
export declare class HaCardConditionOr extends LitElement {
    hass: HomeAssistant;
    condition: OrCondition;
    disabled: boolean;
    static get defaultConfig(): OrCondition;
    protected static validateUIConfig(condition: StateCondition): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-or": HaCardConditionOr;
    }
}
