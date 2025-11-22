import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-code-editor";
import "../ha-input-helper-text";
import "../ha-alert";
export declare class HaTemplateSelector extends LitElement {
    hass: HomeAssistant;
    value?: string;
    label?: string;
    helper?: string;
    placeholder?: any;
    disabled: boolean;
    required: boolean;
    private warn;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-template": HaTemplateSelector;
    }
}
