import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import "../components/ha-slider";
import "../components/ha-textfield";
import type { HomeAssistant } from "../types";
declare class StateCardNumber extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    private _loaded?;
    private _updated?;
    private _resizeObserver?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _initialLoad;
    private _measureCard;
    private _attachObserver;
    private _selectedValueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-number": StateCardNumber;
    }
}
export {};
