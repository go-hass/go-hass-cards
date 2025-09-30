import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-alert";
import "./ha-combo-box";
import "./ha-combo-box-item";
declare class HaAddonPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value: string;
    helper?: string;
    private _addons?;
    disabled: boolean;
    required: boolean;
    private _comboBox;
    private _error?;
    open(): void;
    focus(): void;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _getAddons;
    private get _value();
    private _addonChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-addon-picker": HaAddonPicker;
    }
}
export {};
