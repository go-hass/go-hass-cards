import type { TemplateResult } from "lit";
import { LitElement } from "lit";
declare class MQTTDiscoveryPayload extends LitElement {
    payload: Record<string, unknown>;
    showAsYaml: boolean;
    summary: string;
    private _open;
    protected render(): TemplateResult;
    private _renderPayload;
    private _handleToggle;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "mqtt-discovery-payload": MQTTDiscoveryPayload;
    }
}
export {};
