import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-select-box";
import type { AssistSatelliteConfiguration } from "../../data/assist_satellite";
import type { HomeAssistant } from "../../types";
export declare class HaVoiceAssistantSetupStepPipeline extends LitElement {
    hass: HomeAssistant;
    assistConfiguration?: AssistSatelliteConfiguration;
    deviceId: string;
    assistEntityId?: string;
    language?: string;
    languages: string[];
    private _cloudChecked;
    private _value?;
    private _languageScores?;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _getOptions;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _fetchData;
    private _hasCloud;
    private _createCloudPipeline;
    private _valueChanged;
    private _setupCloud;
    private _createPipeline;
    private _setupLocalFocused;
    private _setupLocalFull;
    private _languageChanged;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-step-pipeline": HaVoiceAssistantSetupStepPipeline;
    }
}
