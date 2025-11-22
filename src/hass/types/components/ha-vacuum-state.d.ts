import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import "./ha-button";
export declare class HaVacuumState extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    protected render(): TemplateResult;
    private _computeInterceptable;
    private _computeLabel;
    private _callService;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-vacuum-state": HaVacuumState;
    }
}
