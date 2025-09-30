import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-combo-box";
export type HaEntityPickerEntityFilterFunc = (entityId: HassEntity) => boolean;
declare class HaEntityAttributePicker extends LitElement {
    hass: HomeAssistant;
    entityId?: string | string[];
    /**
     * List of attributes to be hidden.
     * @type {Array}
     * @attr hide-attributes
     */
    hideAttributes?: string[];
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomValue: any;
    label?: string;
    value?: string;
    helper?: string;
    private _opened;
    private _comboBox;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private get _value();
    private _openedChanged;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-attribute-picker": HaEntityAttributePicker;
    }
}
export {};
