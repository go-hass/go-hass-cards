import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { StateTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
import "../../../../../components/ha-form/ha-form";
export declare class HaStateTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: StateTrigger;
    disabled: boolean;
    static get defaultConfig(): StateTrigger;
    private _schema;
    shouldUpdate(changedProperties: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _applyAnyStateExclusive;
    private _normalizeStates;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-state": HaStateTrigger;
    }
}
