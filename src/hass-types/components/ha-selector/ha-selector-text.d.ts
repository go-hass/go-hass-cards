import { LitElement } from "lit";
import type { StringSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-icon-button";
import "../ha-multi-textfield";
import "../ha-textarea";
import "../ha-textfield";
export declare class HaTextSelector extends LitElement {
    hass?: HomeAssistant;
    value?: any;
    name?: string;
    label?: string;
    placeholder?: string;
    helper?: string;
    selector: StringSelector;
    disabled: boolean;
    required: boolean;
    private _unmaskedPassword;
    focus(): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
    private _toggleUnmaskedPassword;
    private _handleChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-text": HaTextSelector;
    }
}
