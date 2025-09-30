import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { MQTTMessage } from "../../../../../../data/mqtt";
import type { HomeAssistant } from "../../../../../../types";
declare class MQTTMessages extends LitElement {
    hass: HomeAssistant;
    messages: MQTTMessage[];
    direction: string;
    showAsYaml: boolean;
    showDeserialized: boolean;
    subscribedTopic: string;
    summary: string;
    private _open;
    private _payloadsJson;
    private _showTopic;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _renderSingleMessage;
    private _renderSinglePayload;
    private _tryParseJson;
    private _handleToggle;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "mqtt-messages": MQTTMessages;
    }
}
export {};
