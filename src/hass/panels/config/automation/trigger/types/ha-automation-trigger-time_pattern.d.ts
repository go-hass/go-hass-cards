import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { TimePatternTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaTimePatternTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: TimePatternTrigger;
    disabled: boolean;
    static get defaultConfig(): TimePatternTrigger;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    private _computeHelperCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-time_pattern": HaTimePatternTrigger;
    }
}
