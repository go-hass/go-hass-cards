import { LitElement } from "lit";
import type { DurationSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import type { HaDurationData } from "../ha-duration-input";
import "../ha-duration-input";
export declare class HaTimeDuration extends LitElement {
    hass: HomeAssistant;
    selector: DurationSelector;
    value?: HaDurationData;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-duration": HaTimeDuration;
    }
}
