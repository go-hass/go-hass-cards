import { LitElement } from "lit";
import type { CountrySelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-country-picker";
export declare class HaCountrySelector extends LitElement {
    hass: HomeAssistant;
    selector: CountrySelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-country": HaCountrySelector;
    }
}
