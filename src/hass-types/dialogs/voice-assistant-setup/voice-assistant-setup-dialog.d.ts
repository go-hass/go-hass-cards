import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/chips/ha-assist-chip";
import "../../components/ha-dialog";
import "../../components/ha-md-button-menu";
import type { HomeAssistant } from "../../types";
import type { VoiceAssistantSetupDialogParams } from "./show-voice-assistant-setup-dialog";
import "./voice-assistant-setup-step-area";
import "./voice-assistant-setup-step-change-wake-word";
import "./voice-assistant-setup-step-check";
import "./voice-assistant-setup-step-cloud";
import "./voice-assistant-setup-step-local";
import "./voice-assistant-setup-step-pipeline";
import "./voice-assistant-setup-step-success";
import "./voice-assistant-setup-step-update";
import "./voice-assistant-setup-step-wake-word";
export declare const enum STEP {
    INIT = 0,
    UPDATE = 1,
    CHECK = 2,
    WAKEWORD = 3,
    AREA = 4,
    PIPELINE = 5,
    SUCCESS = 6,
    CLOUD = 7,
    LOCAL = 8,
    CHANGE_WAKEWORD = 9
}
export declare class HaVoiceAssistantSetupDialog extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _step;
    private _assistConfiguration?;
    private _error?;
    private _language?;
    private _languages;
    private _localOption?;
    private _previousSteps;
    private _nextStep?;
    showDialog(params: VoiceAssistantSetupDialogParams): Promise<void>;
    closeDialog(): Promise<void>;
    protected willUpdate(changedProps: any): void;
    private _dialogClosed;
    private _deviceEntities;
    private _findDomainEntityId;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _getLanguages;
    private _fetchAssistConfiguration;
    private _handlePickLanguage;
    private _languageChanged;
    private _goToPreviousStep;
    private _goToNextStep;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-dialog": HaVoiceAssistantSetupDialog;
    }
    interface HASSDomEvents {
        "next-step": {
            step?: STEP;
            updateConfig?: boolean;
            noPrevious?: boolean;
            nextStep?: STEP;
            option?: string;
        } | undefined;
        "prev-step": undefined;
        "language-changed": {
            value: string;
        };
    }
}
