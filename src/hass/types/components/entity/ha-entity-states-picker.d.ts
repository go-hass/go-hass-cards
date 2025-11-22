import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "./ha-entity-state-picker";
export declare class HaEntityStatesPicker extends LitElement {
    hass: HomeAssistant;
    entityId?: string;
    attribute?: string;
    extraOptions?: any[];
    allowCustomValue: any;
    label?: string;
    value?: string[];
    helper?: string;
    disabled: boolean;
    required: boolean;
    hideStates?: string[];
    private _keys;
    private _getKey;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _addValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-states-picker": HaEntityStatesPicker;
    }
}
