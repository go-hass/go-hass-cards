import { LitElement } from "lit";
import "../../../../../components/ha-textfield";
import "../../../../../components/ha-icon-button";
import type { ConversationTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaConversationTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: ConversationTrigger;
    disabled: boolean;
    private _optionInput?;
    static get defaultConfig(): ConversationTrigger;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleKeyAdd;
    private _addOption;
    private _updateOption;
    private _removeOption;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-conversation": HaConversationTrigger;
    }
}
