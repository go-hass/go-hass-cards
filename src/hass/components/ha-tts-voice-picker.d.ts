import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { TTSVoice } from "../data/tts";
import type { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
export declare class HaTTSVoicePicker extends LitElement {
    value?: string;
    label?: string;
    engineId?: string;
    language?: string;
    hass: HomeAssistant;
    disabled: boolean;
    required: boolean;
    _voices?: TTSVoice[] | null;
    private _select?;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _debouncedUpdateVoices;
    private _updateVoices;
    protected updated(changedProperties: PropertyValues<this>): void;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tts-voice-picker": HaTTSVoicePicker;
    }
}
