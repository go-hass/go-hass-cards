import { LitElement } from "lit";
import type { NavigationSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-navigation-picker";
export declare class HaNavigationSelector extends LitElement {
    hass: HomeAssistant;
    selector: NavigationSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-navigation": HaNavigationSelector;
    }
}
