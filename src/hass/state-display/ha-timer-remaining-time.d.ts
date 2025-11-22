import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import type { HomeAssistant } from "../types";
declare class HaTimerRemainingTime extends ReactiveElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    private timeRemaining?;
    private _updateRemaining;
    protected createRenderRoot(): this;
    protected update(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _clearInterval;
    private _startInterval;
    private _calculateRemaining;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-timer-remaining-time": HaTimerRemainingTime;
    }
}
export {};
