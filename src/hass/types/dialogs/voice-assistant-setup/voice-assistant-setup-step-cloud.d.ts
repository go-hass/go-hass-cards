import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "./cloud/cloud-step-intro";
import "./cloud/cloud-step-signin";
import "./cloud/cloud-step-signup";
export declare class HaVoiceAssistantSetupStepCloud extends LitElement {
    hass: HomeAssistant;
    private _state;
    protected render(): import("lit-html").TemplateResult<1>;
    private _cloudStep;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-step-cloud": HaVoiceAssistantSetupStepCloud;
    }
    interface HASSDomEvents {
        "cloud-step": {
            step: "SIGNUP" | "SIGNIN" | "DONE";
        };
    }
}
