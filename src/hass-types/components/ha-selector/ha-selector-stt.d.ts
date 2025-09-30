import { LitElement } from "lit";
import type { STTSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-stt-picker";
export declare class HaSTTSelector extends LitElement {
    hass: HomeAssistant;
    selector: STTSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    context?: {
        language?: string;
    };
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-stt": HaSTTSelector;
    }
}
