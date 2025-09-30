import { LitElement } from "lit";
import "./ha-list-item";
import "./ha-select";
export declare const COUNTRIES: string[];
export declare class HaCountryPicker extends LitElement {
    language: string;
    value?: string;
    label?: string;
    countries?: string[];
    helper?: string;
    required: boolean;
    disabled: boolean;
    noSort: boolean;
    private _getOptions;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-country-picker": HaCountryPicker;
    }
}
