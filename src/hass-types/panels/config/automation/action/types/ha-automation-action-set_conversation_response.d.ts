import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { SetConversationResponseAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaSetConversationResponseAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    action: SetConversationResponseAction;
    disabled: boolean;
    static get defaultConfig(): SetConversationResponseAction;
    protected render(): import("lit-html").TemplateResult<1>;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-set_conversation_response": HaSetConversationResponseAction;
    }
}
