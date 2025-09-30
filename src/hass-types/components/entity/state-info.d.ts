import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-relative-time";
import "./state-badge";
import "../ha-tooltip";
declare class StateInfo extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    inDialog: boolean;
    color?: string;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-info": StateInfo;
    }
}
export {};
