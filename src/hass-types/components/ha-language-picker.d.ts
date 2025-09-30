import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { FrontendLocaleData } from "../data/translation";
import type { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
export declare const getLanguageOptions: (languages: string[], nativeName: boolean, noSort: boolean, locale?: FrontendLocaleData) => {
    label: string;
    value: string;
}[];
export declare class HaLanguagePicker extends LitElement {
    value?: string;
    label?: string;
    languages?: string[];
    hass?: HomeAssistant;
    disabled: boolean;
    required: boolean;
    nativeName: boolean;
    noSort: boolean;
    inlineArrow: boolean;
    _defaultLanguages: string[];
    private _select;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    private _getLanguagesOptions;
    private _computeDefaultLanguageOptions;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-language-picker": HaLanguagePicker;
    }
}
