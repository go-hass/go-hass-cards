import { LitElement } from "lit";
import type { TTSSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-tts-picker";
export declare class HaTTSSelector extends LitElement {
    hass: HomeAssistant;
    selector: TTSSelector;
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
        "ha-selector-tts": HaTTSSelector;
    }
}
