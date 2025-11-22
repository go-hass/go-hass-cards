import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-list-item";
import "../../components/ha-select";
import "../../components/ha-tts-voice-picker";
import type { AssistSatelliteConfiguration } from "../../data/assist_satellite";
import "../../panels/lovelace/entity-rows/hui-select-entity-row";
import type { HomeAssistant } from "../../types";
export declare class HaVoiceAssistantSetupStepSuccess extends LitElement {
    hass: HomeAssistant;
    assistConfiguration?: AssistSatelliteConfiguration;
    deviceId: string;
    assistEntityId?: string;
    private _ttsSettings?;
    private _error?;
    private _deviceName?;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getPipeline;
    private _deviceNameChanged;
    private _wakeWordPicked;
    private _pipelinePicked;
    private _setTtsSettings;
    private _voicePicked;
    private _testTts;
    private _announce;
    private _testWakeWord;
    private _openPipeline;
    private _done;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-step-success": HaVoiceAssistantSetupStepSuccess;
    }
}
