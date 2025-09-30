import { LitElement } from "lit";
import type { SelectSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../chips/ha-chip-set";
import "../chips/ha-input-chip";
import "../ha-checkbox";
import "../ha-combo-box";
import "../ha-formfield";
import "../ha-input-helper-text";
import "../ha-list-item";
import "../ha-radio";
import "../ha-select";
import "../ha-select-box";
import "../ha-sortable";
export declare class HaSelectSelector extends LitElement {
    hass: HomeAssistant;
    selector: SelectSelector;
    value?: string | string[];
    label?: string;
    helper?: string;
    localizeValue?: (key: string) => string;
    disabled: boolean;
    required: boolean;
    private comboBox;
    private _itemMoved;
    private _move;
    private _filter;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderHelper;
    private get _mode();
    private _valueChanged;
    private _checkboxChanged;
    private _removeItem;
    private _comboBoxValueChanged;
    private _openedChanged;
    private _filterChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-select": HaSelectSelector;
    }
}
