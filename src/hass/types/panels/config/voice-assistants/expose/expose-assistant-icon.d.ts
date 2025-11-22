import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../types";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
export declare class VoiceAssistantExposeAssistantIcon extends LitElement {
    hass: HomeAssistant;
    unsupported: boolean;
    manual: boolean;
    assistant?: "conversation" | "cloud.alexa" | "cloud.google_assistant";
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "voice-assistants-expose-assistant-icon": VoiceAssistantExposeAssistantIcon;
    }
}
