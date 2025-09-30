import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import type { HomeAssistant } from "../../../types";
import "../../../components/ha-assist-chat";
import "../../../components/ha-spinner";
import "../../../components/ha-alert";
import type { AssistPipeline } from "../../../data/assist_pipeline";
declare class MoreInfoConversation extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    _pipeline?: AssistPipeline;
    private _errorLoadAssist?;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _getPipeline;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-conversation": MoreInfoConversation;
    }
}
export {};
