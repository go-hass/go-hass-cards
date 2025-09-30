import { LitElement } from "lit";
import type { DateTimeSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-date-input";
import "../ha-time-input";
import "../ha-input-helper-text";
export declare class HaDateTimeSelector extends LitElement {
    hass: HomeAssistant;
    selector: DateTimeSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _dateInput;
    private _timeInput;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-datetime": HaDateTimeSelector;
    }
}
