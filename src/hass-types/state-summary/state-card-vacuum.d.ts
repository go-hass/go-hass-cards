import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import "../components/ha-vacuum-state";
import type { HomeAssistant } from "../types";
declare class StateCardVacuum extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-vacuum": StateCardVacuum;
    }
}
export {};
