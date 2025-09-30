import { LitElement } from "lit";
import type { SunCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { ConditionElement } from "../ha-automation-condition-row";
import "../../../../../components/ha-form/ha-form";
export declare class HaSunCondition extends LitElement implements ConditionElement {
    hass: HomeAssistant;
    condition: SunCondition;
    disabled: boolean;
    static get defaultConfig(): SunCondition;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-sun": HaSunCondition;
    }
}
