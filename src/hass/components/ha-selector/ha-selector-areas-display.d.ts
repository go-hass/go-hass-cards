import { LitElement } from "lit";
import type { AreasDisplaySelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-areas-display-editor";
export declare class HaAreasDisplaySelector extends LitElement {
    hass: HomeAssistant;
    selector: AreasDisplaySelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-areas_display": HaAreasDisplaySelector;
    }
}
