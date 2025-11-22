import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../components/entity/ha-entity-toggle";
import "../components/entity/state-info";
import "../components/ha-button";
import type { HomeAssistant } from "../types";
declare class StateCardInputButton extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _pressButton;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-input_button": StateCardInputButton;
    }
}
export {};
