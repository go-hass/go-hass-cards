import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { FrontendLocaleData } from "../data/translation";
import type { HomeAssistant } from "../types";
import "./ha-button";
import "./ha-generic-picker";
import type { HaGenericPicker } from "./ha-generic-picker";
import type { PickerComboBoxItem } from "./ha-picker-combo-box";
export declare const getLanguageOptions: (languages: string[], nativeName: boolean, noSort: boolean, locale?: FrontendLocaleData) => PickerComboBoxItem[];
export declare class HaLanguagePicker extends LitElement {
    value?: string;
    label?: string;
    languages?: string[];
    hass?: HomeAssistant;
    disabled: boolean;
    required: boolean;
    nativeName: boolean;
    buttonStyle: boolean;
    noSort: boolean;
    inlineArrow: boolean;
    _defaultLanguages: string[];
    genericPicker: HaGenericPicker;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _getLanguagesOptions;
    private _computeDefaultLanguageOptions;
    private _getItems;
    private _getLanguageName;
    private _valueRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    private _openPicker;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-language-picker": HaLanguagePicker;
    }
}
