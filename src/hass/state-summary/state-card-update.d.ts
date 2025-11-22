import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import type { UpdateEntity } from "../data/update";
import type { HomeAssistant } from "../types";
export declare class StateCardUpdate extends LitElement {
    hass: HomeAssistant;
    stateObj: UpdateEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-update": StateCardUpdate;
    }
}
