import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-formfield";
import "../ha-switch";
import "../ha-input-helper-text";
export declare class HaBooleanSelector extends LitElement {
    hass: HomeAssistant;
    value: boolean;
    placeholder?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-boolean": HaBooleanSelector;
    }
}
