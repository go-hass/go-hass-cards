import "@home-assistant/webawesome/dist/components/popover/popover";
import type { RenderItemFunction } from "@lit-labs/virtualizer/virtualize";
import { LitElement, type CSSResultGroup } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-bottom-sheet";
import "./ha-button";
import "./ha-combo-box-item";
import "./ha-input-helper-text";
import "./ha-picker-combo-box";
import type { PickerComboBoxItem, PickerComboBoxSearchFn } from "./ha-picker-combo-box";
import "./ha-picker-field";
import type { PickerValueRenderer } from "./ha-picker-field";
import "./ha-svg-icon";
export declare class HaGenericPicker extends LitElement {
    hass?: HomeAssistant;
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
    rowRenderer?: RenderItemFunction<PickerComboBoxItem>;
    valueRenderer?: PickerValueRenderer;
    searchFn?: PickerComboBoxSearchFn<PickerComboBoxItem>;
    notFoundLabel?: string;
    popoverPlacement: "bottom" | "top" | "left" | "right" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end";
    /** If set picker shows an add button instead of textbox when value isn't set */
    addButtonLabel?: string;
    private _containerElement?;
    private _comboBox?;
    private _opened;
    private _pickerWrapperOpen;
    private _popoverWidth;
    private _openedNarrow;
    private _narrow;
    private _newValue?;
    private _unsubscribeTinyKeys?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderComboBox;
    private _renderHelper;
    private _dialogOpened;
    private _hidePicker;
    private _valueChanged;
    private _clear;
    private _setValue;
    open(ev?: Event): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleResize;
    private _handleEscClose;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-generic-picker": HaGenericPicker;
    }
}
