import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-combo-box";
import "./ha-icon";
import "./ha-combo-box-item";
export declare class HaIconPicker extends LitElement {
    hass?: HomeAssistant;
    value?: string;
    label?: string;
    helper?: string;
    placeholder?: string;
    errorMessage?: string;
    disabled: boolean;
    required: boolean;
    invalid: boolean;
    protected render(): TemplateResult;
    private _filterIcons;
    private _iconProvider;
    private _openedChanged;
    private _valueChanged;
    private _setValue;
    private get _value();
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-picker": HaIconPicker;
    }
}
