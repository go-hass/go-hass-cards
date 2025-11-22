import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare class HaWaterHeaterState extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    protected render(): TemplateResult;
    private _computeTarget;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-water_heater-state": HaWaterHeaterState;
    }
}
