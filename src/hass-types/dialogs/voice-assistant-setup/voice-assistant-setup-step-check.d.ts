import { LitElement, type PropertyValues } from "lit";
import "../../components/ha-button";
import "../../components/ha-spinner";
import type { HomeAssistant } from "../../types";
export declare class HaVoiceAssistantSetupStepCheck extends LitElement {
    hass: HomeAssistant;
    assistEntityId?: string;
    private _status?;
    private _showLoader;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _testConnection;
    private _nextStep;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-step-check": HaVoiceAssistantSetupStepCheck;
    }
}
