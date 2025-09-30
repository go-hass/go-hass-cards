import type { HassEntity } from "home-assistant-js-websocket";
import "../components/entity/state-info";
import "../components/ha-button";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
declare class StateCardConfigurator extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-configurator": StateCardConfigurator;
    }
}
export {};
