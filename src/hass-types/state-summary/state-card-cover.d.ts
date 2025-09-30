import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import "../components/ha-cover-controls";
import "../components/ha-cover-tilt-controls";
import type { CoverEntity } from "../data/cover";
import type { HomeAssistant } from "../types";
declare class StateCardCover extends LitElement {
    hass: HomeAssistant;
    stateObj: CoverEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-cover": StateCardCover;
    }
}
export {};
