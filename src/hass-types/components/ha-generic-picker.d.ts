import type { ComboBoxLitRenderer } from "@vaadin/combo-box/lit";
import { LitElement, type CSSResultGroup } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-combo-box-item";
import "./ha-icon-button";
import "./ha-input-helper-text";
import "./ha-picker-combo-box";
import type { PickerComboBoxItem, PickerComboBoxSearchFn } from "./ha-picker-combo-box";
import "./ha-picker-field";
import type { PickerValueRenderer } from "./ha-picker-field";
import "./ha-svg-icon";
export declare class HaGenericPicker extends LitElement {
    hass: HomeAssistant;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomValue: any;
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    searchLabel?: string;
    hideClearIcon: boolean;
    getItems?: () => PickerComboBoxItem[];
    getAdditionalItems?: (searchString?: string) => PickerComboBoxItem[];
    rowRenderer?: ComboBoxLitRenderer<PickerComboBoxItem>;
    valueRenderer?: PickerValueRenderer;
    searchFn?: PickerComboBoxSearchFn<PickerComboBoxItem>;
    notFoundLabel?: string;
    private _field?;
    private _comboBox?;
    private _opened;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderHelper;
    private _valueChanged;
    private _clear;
    private _setValue;
    open(): Promise<void>;
    private _openedChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-generic-picker": HaGenericPicker;
    }
}
