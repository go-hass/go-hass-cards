import type { HassEntity } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/ha-relative-time";
import "../panels/lovelace/components/hui-timestamp-display";
import type { HomeAssistant } from "../types";
export declare const STATE_DISPLAY_SPECIAL_CONTENT: readonly ["remaining_time", "install_status"];
export declare const STATE_DISPLAY_SPECIAL_CONTENT_DOMAINS: Record<string, (typeof STATE_DISPLAY_SPECIAL_CONTENT)[number][]>;
export declare const HIDDEN_ZERO_ATTRIBUTES_DOMAINS: Record<string, string[]>;
type StateContent = string | string[];
export declare const DEFAULT_STATE_CONTENT_DOMAINS: Record<string, StateContent>;
declare class StateDisplay extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    content?: StateContent;
    name?: string;
    dashUnavailable?: boolean;
    protected createRenderRoot(): this;
    private get _content();
    private _computeContent;
    protected render(): TemplateResult<1> | Iterable<string | TemplateResult<1>>;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-display": StateDisplay;
    }
}
export {};
