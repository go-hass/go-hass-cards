import { LitElement } from "lit";
import type { ThemeSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-theme-picker";
export declare class HaThemeSelector extends LitElement {
    hass: HomeAssistant;
    selector: ThemeSelector;
    value?: string;
    label?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-theme": HaThemeSelector;
    }
}
