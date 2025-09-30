import { LitElement } from "lit";
import type { LanguageSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-language-picker";
export declare class HaLanguageSelector extends LitElement {
    hass: HomeAssistant;
    selector: LanguageSelector;
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
        "ha-selector-language": HaLanguageSelector;
    }
}
