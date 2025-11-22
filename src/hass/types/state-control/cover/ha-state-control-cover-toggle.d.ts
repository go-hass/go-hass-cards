import type { HassEntity } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-control-button";
import "../../components/ha-control-switch";
import "../../components/ha-state-icon";
import type { HomeAssistant } from "../../types";
export declare class HaStateControlCoverToggle extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    private _valueChanged;
    private _turnOn;
    private _turnOff;
    private _callService;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-cover-toggle": HaStateControlCoverToggle;
    }
}
