import type { RenderItemFunction } from "@lit-labs/virtualizer/virtualize";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-combo-box-item";
import "./ha-icon";
import "./ha-textfield";
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
    hass?: HomeAssistant;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomValue: any;
    label?: string;
    value?: string;
    private _listScrolled;
    getItems?: () => PickerComboBoxItem[];
    getAdditionalItems?: (searchString?: string) => PickerComboBoxItem[];
    rowRenderer?: RenderItemFunction<PickerComboBoxItem>;
    notFoundLabel?: string;
    searchFn?: PickerComboBoxSearchFn<PickerComboBoxItem>;
    mode: "popover" | "dialog";
    private _virtualizerElement?;
    private _searchFieldElement?;
    private _items;
    private _allItems;
    private _selectedItemIndex;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    private _removeKeyboardShortcuts?;
    protected firstUpdated(): void;
    willUpdate(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _defaultNotFoundItem;
    private _getAdditionalItems;
    private _getItems;
    private _renderItem;
    private _onScrollList;
    private get _value();
    private _valueSelected;
    private _fuseIndex;
    private _filterChanged;
    private _registerKeyboardShortcuts;
    private _focusList;
    private _selectNextItem;
    private _selectPreviousItem;
    private _selectFirstItem;
    private _selectLastItem;
    private _scrollToSelectedItem;
    private _pickSelectedItem;
    private _resetSelectedItem;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-picker-combo-box": HaPickerComboBox;
    }
}
