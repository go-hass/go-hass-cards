import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-combo-box";
import "./ha-combo-box-item";
import "./ha-icon";
export declare class HaNavigationPicker extends LitElement {
    hass?: HomeAssistant;
    label?: string;
    value?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _opened;
    private navigationItemsLoaded;
    private navigationItems;
    private comboBox;
    protected render(): TemplateResult;
    private _openedChanged;
    private _loadNavigationItems;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    private _valueChanged;
    private _setValue;
    private _filterChanged;
    private get _value();
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-navigation-picker": HaNavigationPicker;
    }
}
