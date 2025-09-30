import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-relative-time";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoSun extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-sun": MoreInfoSun;
    }
}
export {};
