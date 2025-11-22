import type { ComboBoxLitRenderer } from "@vaadin/combo-box/lit";
import "@vaadin/combo-box/theme/material/vaadin-combo-box-light";
import type { ComboBoxDataProvider } from "@vaadin/combo-box/vaadin-combo-box-light";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-combo-box-item";
import "./ha-combo-box-textfield";
import "./ha-icon-button";
import "./ha-input-helper-text";
import "./ha-textfield";
export declare class HaComboBox extends LitElement {
    hass?: HomeAssistant;
    label?: string;
    value?: string;
    placeholder?: string;
    validationMessage?: string;
    helper?: string;
    errorMessage?: string;
    invalid: boolean;
    icon: boolean;
    items?: any[];
    filteredItems?: any[];
    dataProvider?: ComboBoxDataProvider<any>;
    allowCustomValue: boolean;
    itemValuePath: string;
    itemLabelPath: string;
    itemIdPath?: string;
    renderer?: ComboBoxLitRenderer<any>;
    disabled: boolean;
    required: boolean;
    opened: boolean;
    hideClearIcon: boolean;
    clearInitialValue: boolean;
    private _comboBox;
    private _inputElement;
    private _forceBlankValue;
    private _overlayMutationObserver?;
    private _bodyMutationObserver?;
    open(): Promise<void>;
    focus(): Promise<void>;
    disconnectedCallback(): void;
    get selectedItem(): any;
    setInputValue(value: string): void;
    setTextFieldValue(value: string): void;
    protected render(): TemplateResult;
    private _renderHelper;
    private _defaultRowRenderer;
    private _clearValue;
    private _toggleOpen;
    private _openedChanged;
    private _observeBody;
    private _removeInert;
    private _filterChanged;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-combo-box": HaComboBox;
    }
}
declare global {
    interface HASSDomEvents {
        "filter-changed": {
            value: string;
        };
        "opened-changed": {
            value: boolean;
        };
    }
}
