import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoDefault extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-default": MoreInfoDefault;
    }
}
export {};
