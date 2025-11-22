import { LitElement, nothing } from "lit";
import type { ConfigEntry } from "../data/config_entries";
import type { HomeAssistant } from "../types";
import "./ha-combo-box";
import "./ha-combo-box-item";
export interface ConfigEntryExtended extends ConfigEntry {
    localized_domain_name?: string;
}
declare class HaConfigEntryPicker extends LitElement {
    hass: HomeAssistant;
    integration?: string;
    label?: string;
    value: string;
    helper?: string;
    private _configEntries?;
    disabled: boolean;
    required: boolean;
    private _comboBox;
    open(): void;
    focus(): void;
    protected firstUpdated(): void;
    private _rowRenderer;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _onImageLoad;
    private _onImageError;
    private _getConfigEntries;
    private get _value();
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-entry-picker": HaConfigEntryPicker;
    }
}
export {};
