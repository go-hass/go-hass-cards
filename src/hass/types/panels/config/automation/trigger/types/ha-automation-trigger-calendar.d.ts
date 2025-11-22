import { LitElement } from "lit";
import type { CalendarTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
import "../../../../../components/ha-form/ha-form";
export declare class HaCalendarTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: CalendarTrigger;
    disabled: boolean;
    private _schema;
    static get defaultConfig(): CalendarTrigger;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-calendar": HaCalendarTrigger;
    }
}
