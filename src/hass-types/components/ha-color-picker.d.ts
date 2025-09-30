import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-md-divider";
import "./ha-select";
export declare class HaColorPicker extends LitElement {
    label?: string;
    helper?: string;
    hass: HomeAssistant;
    value?: string;
    defaultColor?: string;
    includeState: boolean;
    includeNone: boolean;
    disabled: boolean;
    private _select?;
    connectedCallback(): void;
    private _valueSelected;
    render(): import("lit-html").TemplateResult<1>;
    private _renderColorCircle;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-color-picker": HaColorPicker;
    }
}
