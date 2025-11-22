import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-badge";
import "../components/ha-list-item";
import "../components/ha-select";
import type { SelectEntity } from "../data/select";
import type { HomeAssistant } from "../types";
declare class StateCardSelect extends LitElement {
    hass: HomeAssistant;
    stateObj: SelectEntity;
    protected render(): TemplateResult;
    private _selectedOptionChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-select": StateCardSelect;
    }
}
export {};
