import "../components/ha-textfield";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-badge";
import type { TextEntity } from "../data/text";
import type { HomeAssistant } from "../types";
declare class StateCardText extends LitElement {
    hass: HomeAssistant;
    stateObj: TextEntity;
    protected render(): TemplateResult;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-text": StateCardText;
    }
}
export {};
