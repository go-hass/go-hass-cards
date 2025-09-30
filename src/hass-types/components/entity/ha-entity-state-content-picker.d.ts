import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-combo-box";
import "../ha-sortable";
import "../chips/ha-input-chip";
import "../chips/ha-chip-set";
declare class HaEntityStatePicker extends LitElement {
    hass: HomeAssistant;
    entityId?: string;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowName: boolean;
    label?: string;
    value?: string[] | string;
    helper?: string;
    private _opened;
    private _comboBox;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    private options;
    private _filter;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private get _value();
    private _openedChanged;
    private _filterChanged;
    private _moveItem;
    private _removeItem;
    private _comboBoxValueChanged;
    private _setValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-state-content-picker": HaEntityStatePicker;
    }
}
export {};
