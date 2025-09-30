import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import "../state-display/ha-timer-remaining-time";
import type { HomeAssistant } from "../types";
declare class StateCardTimer extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-timer": StateCardTimer;
    }
}
export {};
