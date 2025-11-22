import { LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import "../../../components/ha-button";
import type { TimerEntity } from "../../../data/timer";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoTimer extends LitElement {
    hass: HomeAssistant;
    stateObj?: TimerEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleActionClick;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-timer": MoreInfoTimer;
    }
}
export {};
