import { LitElement } from "lit";
import type { ButtonToggleSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-button-toggle-group";
export declare class HaButtonToggleSelector extends LitElement {
    hass: HomeAssistant;
    selector: ButtonToggleSelector;
    value?: string;
    label?: string;
    helper?: string;
    localizeValue?: (key: string) => string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-button_toggle": HaButtonToggleSelector;
    }
}
