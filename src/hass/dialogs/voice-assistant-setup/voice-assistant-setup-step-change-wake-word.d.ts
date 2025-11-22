import { LitElement } from "lit";
import "../../components/ha-md-list";
import "../../components/ha-md-list-item";
import type { AssistSatelliteConfiguration } from "../../data/assist_satellite";
import type { HomeAssistant } from "../../types";
export declare class HaVoiceAssistantSetupStepChangeWakeWord extends LitElement {
    hass: HomeAssistant;
    assistConfiguration?: AssistSatelliteConfiguration;
    assistEntityId?: string;
    protected render(): import("lit-html").TemplateResult<1>;
    private _wakeWordPicked;
    private _nextStep;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-step-change-wake-word": HaVoiceAssistantSetupStepChangeWakeWord;
    }
}
