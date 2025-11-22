import { LitElement } from "lit";
import type { UiColorSelector } from "../../data/selector";
import "../ha-color-picker";
import type { HomeAssistant } from "../../types";
export declare class HaSelectorUiColor extends LitElement {
    hass: HomeAssistant;
    selector: UiColorSelector;
    value?: string;
    label?: string;
    helper?: string;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-ui_color": HaSelectorUiColor;
    }
}
