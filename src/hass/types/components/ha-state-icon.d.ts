import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon";
import "./ha-svg-icon";
export declare class HaStateIcon extends LitElement {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    stateValue?: string;
    icon?: string;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-icon": HaStateIcon;
    }
}
