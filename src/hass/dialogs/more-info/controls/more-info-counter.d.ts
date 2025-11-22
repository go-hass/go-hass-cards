import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import "../../../components/ha-button";
declare class MoreInfoCounter extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleActionClick;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-counter": MoreInfoCounter;
    }
}
export {};
