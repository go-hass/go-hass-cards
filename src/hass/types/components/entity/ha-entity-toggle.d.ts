import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-formfield";
import "../ha-icon-button";
import "../ha-switch";
export declare class HaEntityToggle extends LitElement {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    label?: string;
    private _isOn;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    willUpdate(changedProps: PropertyValues): void;
    private _toggleChanged;
    private _turnOn;
    private _turnOff;
    private _callService;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-toggle": HaEntityToggle;
    }
}
