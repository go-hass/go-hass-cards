import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { TTSEngine } from "../data/tts";
import type { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
export declare class HaTTSPicker extends LitElement {
    value?: string;
    label?: string;
    language?: string;
    hass: HomeAssistant;
    disabled: boolean;
    required: boolean;
    _engines?: TTSEngine[];
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _debouncedUpdateEngines;
    private _updateEngines;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tts-picker": HaTTSPicker;
    }
}
