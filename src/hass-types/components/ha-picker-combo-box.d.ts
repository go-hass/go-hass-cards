import type { ComboBoxLitRenderer } from "@vaadin/combo-box/lit";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-combo-box";
import type { HaComboBox } from "./ha-combo-box";
import "./ha-combo-box-item";
import "./ha-icon";
export interface PickerComboBoxItem {
    id: string;
    primary: string;
    a11y_label?: string;
    secondary?: string;
    search_labels?: string[];
    sorting_label?: string;
    icon_path?: string;
    icon?: string;
}
export interface PickerComboBoxItemWithLabel extends PickerComboBoxItem {
    a11y_label: string;
}
export type PickerComboBoxSearchFn<T extends PickerComboBoxItem> = (search: string, filteredItems: T[], allItems: T[]) => T[];
export declare class HaPickerComboBox extends LitElement {
    hass: HomeAssistant;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomValue: any;
    label?: string;
    value?: string;
    helper?: string;
    getItems?: () => PickerComboBoxItem[];
    getAdditionalItems?: (searchString?: string) => PickerComboBoxItem[];
    rowRenderer?: ComboBoxLitRenderer<PickerComboBoxItem>;
    hideClearIcon: boolean;
    notFoundLabel?: string;
    searchFn?: PickerComboBoxSearchFn<PickerComboBoxItem>;
    private _opened;
    comboBox: HaComboBox;
    open(): Promise<void>;
    focus(): Promise<void>;
    private _initialItems;
    private _items;
    private _defaultNotFoundItem;
    private _getAdditionalItems;
    private _getItems;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private get _value();
    private _openedChanged;
    private _valueChanged;
    private _fuseIndex;
    private _filterChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-picker-combo-box": HaPickerComboBox;
    }
}
