import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { NumberSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-input-helper-text";
import "../ha-slider";
import "../ha-textfield";
export declare class HaNumberSelector extends LitElement {
    hass: HomeAssistant;
    selector: NumberSelector;
    value?: number;
    placeholder?: number;
    label?: string;
    helper?: string;
    localizeValue?: (key: string) => string;
    required: boolean;
    disabled: boolean;
    private _valueStr;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleInputChange;
    private _handleSliderChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-number": HaNumberSelector;
    }
}
