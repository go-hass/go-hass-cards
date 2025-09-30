import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import type { HomeAssistant } from "../types";
declare class StateCardMediaPlayer extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    private _computePrimaryText;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-media_player": StateCardMediaPlayer;
    }
}
export {};
