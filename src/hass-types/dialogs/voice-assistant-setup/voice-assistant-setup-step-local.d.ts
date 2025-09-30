import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-spinner";
import type { AssistSatelliteConfiguration } from "../../data/assist_satellite";
import type { HomeAssistant } from "../../types";
export declare class HaVoiceAssistantSetupStepLocal extends LitElement {
    hass: HomeAssistant;
    assistConfiguration?: AssistSatelliteConfiguration;
    localOption: "focused_local" | "full_local";
    language: string;
    private _state;
    private _detailState?;
    private _error?;
    private _localTts?;
    private _localStt?;
    protected render(): import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _prevStep;
    private _nextStep;
    private _checkLocal;
    private readonly _ttsProviderName;
    private readonly _ttsAddonName;
    private readonly _ttsHostName;
    private readonly _ttsPort;
    private get _sttProviderName();
    private get _sttAddonName();
    private get _sttHostName();
    private readonly _sttPort;
    private _findLocalEntities;
    private _setupConfigEntry;
    private _findConfigFlowInProgress;
    private _createConfigEntry;
    private _pickOrCreatePipelineExists;
    private _createPipeline;
    private _findEntitiesAndCreatePipeline;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-step-local": HaVoiceAssistantSetupStepLocal;
    }
}
