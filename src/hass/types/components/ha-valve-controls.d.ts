import { LitElement, nothing } from "lit";
import type { ValveEntity } from "../data/valve";
import type { HomeAssistant } from "../types";
import "./ha-icon-button";
declare class HaValveControls extends LitElement {
    hass: HomeAssistant;
    stateObj: ValveEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _onOpenTap;
    private _onCloseTap;
    private _onStopTap;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-valve-controls": HaValveControls;
    }
}
export {};
