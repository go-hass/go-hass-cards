import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-combo-box";
declare class HaEntityStatePicker extends LitElement {
    hass: HomeAssistant;
    entityId?: string | string[];
    attribute?: string;
    extraOptions?: any[];
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomValue: any;
    hideStates?: string[];
    label?: string;
    value?: string;
    helper?: string;
    private _opened;
    private _comboBox;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private get _value();
    private _openedChanged;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-state-picker": HaEntityStatePicker;
    }
}
export {};
