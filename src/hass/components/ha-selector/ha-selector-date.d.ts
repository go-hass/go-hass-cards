import { LitElement } from "lit";
import type { DateSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-date-input";
export declare class HaDateSelector extends LitElement {
    hass: HomeAssistant;
    selector: DateSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-date": HaDateSelector;
    }
}
