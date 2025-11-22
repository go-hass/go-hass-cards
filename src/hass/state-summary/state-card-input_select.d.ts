import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-badge";
import "../components/ha-list-item";
import "../components/ha-select";
import type { InputSelectEntity } from "../data/input_select";
import type { HomeAssistant } from "../types";
declare class StateCardInputSelect extends LitElement {
    hass: HomeAssistant;
    stateObj: InputSelectEntity;
    protected render(): TemplateResult;
    private _selectedOptionChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-input_select": StateCardInputSelect;
    }
}
export {};
