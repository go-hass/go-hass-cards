import { LitElement } from "lit";
import type { LabelSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-labels-picker";
export declare class HaLabelSelector extends LitElement {
    hass?: HomeAssistant;
    value?: string | string[];
    name?: string;
    label?: string;
    placeholder?: string;
    helper?: string;
    selector: LabelSelector;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-label": HaLabelSelector;
    }
}
