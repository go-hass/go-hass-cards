import "@material/mwc-menu/mwc-menu-surface";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../chips/ha-assist-chip";
import "../chips/ha-chip-set";
import "../chips/ha-input-chip";
import "../ha-combo-box";
import "../ha-sortable";
export declare class HaStateContentPicker extends LitElement {
    hass: HomeAssistant;
    entityId?: string;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowName: boolean;
    label?: string;
    value?: string[] | string;
    helper?: string;
    private _container?;
    private _comboBox;
    private _opened;
    private _editIndex?;
    private _options;
    protected render(): import("lit-html").TemplateResult<1>;
    private _onClosed;
    private _onOpened;
    private _addItem;
    private _editItem;
    private get _value();
    private _toValue;
    private _openedChanged;
    private _filterSelectedOptions;
    private _filterChanged;
    private _moveItem;
    private _removeItem;
    private _comboBoxValueChanged;
    private _setValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-state-content-picker": HaStateContentPicker;
    }
}
