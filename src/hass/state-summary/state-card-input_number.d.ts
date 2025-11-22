import type { HassEntity } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import "../components/ha-slider";
import "../components/ha-textfield";
import type { HomeAssistant } from "../types";
declare class StateCardInputNumber extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    private _loaded?;
    private _updated?;
    private _resizeObserver?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
    private _initialLoad;
    private _measureCard;
    private _attachObserver;
    private _selectedValueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-input_number": StateCardInputNumber;
    }
}
export {};
