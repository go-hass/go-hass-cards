import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { Agent } from "../data/conversation";
import type { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
export declare class HaConversationAgentPicker extends LitElement {
    value?: string;
    language?: string;
    label?: string;
    hass: HomeAssistant;
    disabled: boolean;
    required: boolean;
    _agents?: Agent[];
    private _configEntry?;
    private _subConfigEntry?;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _maybeFetchConfigEntry;
    private _debouncedUpdateAgents;
    private _updateAgents;
    private _openOptionsFlow;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-conversation-agent-picker": HaConversationAgentPicker;
    }
    interface HASSDomEvents {
        "supported-languages-changed": {
            value: "*" | string[] | undefined;
        };
    }
}
