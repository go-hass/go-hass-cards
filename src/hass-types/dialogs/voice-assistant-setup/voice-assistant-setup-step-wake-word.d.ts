import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-spinner";
import "../../components/ha-dialog-header";
import type { AssistSatelliteConfiguration } from "../../data/assist_satellite";
import type { HomeAssistant } from "../../types";
import type { EntityRegistryDisplayEntry } from "../../data/entity_registry";
export declare class HaVoiceAssistantSetupStepWakeWord extends LitElement {
    hass: HomeAssistant;
    assistConfiguration?: AssistSatelliteConfiguration;
    assistEntityId?: string;
    deviceEntities?: EntityRegistryDisplayEntry[];
    _muteSwitchEntity?: string;
    private _detected;
    private _timedout;
    private _sub?;
    private _timeout?;
    disconnectedCallback(): void;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _startTimeOut;
    private _activeWakeWord;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _listenWakeWord;
    private _stopListeningWakeWord;
    private _nextStep;
    private _changeWakeWord;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-step-wake-word": HaVoiceAssistantSetupStepWakeWord;
    }
}
