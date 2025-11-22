import { LitElement } from "lit";
import type { ConversationAgentSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-conversation-agent-picker";
export declare class HaConversationAgentSelector extends LitElement {
    hass: HomeAssistant;
    selector: ConversationAgentSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    context?: {
        language?: string;
    };
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-conversation_agent": HaConversationAgentSelector;
    }
}
