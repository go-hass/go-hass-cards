import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { TimeCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { ConditionElement } from "../ha-automation-condition-row";
export declare class HaTimeCondition extends LitElement implements ConditionElement {
    hass: HomeAssistant;
    condition: TimeCondition;
    private _inputModeBefore?;
    private _inputModeAfter?;
    disabled: boolean;
    static get defaultConfig(): TimeCondition;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-time": HaTimeCondition;
    }
}
