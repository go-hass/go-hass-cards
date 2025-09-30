import { LitElement, nothing } from "lit";
import type { CoverEntity } from "../data/cover";
import type { HomeAssistant } from "../types";
import "./ha-icon-button";
declare class HaCoverTiltControls extends LitElement {
    hass: HomeAssistant;
    stateObj: CoverEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _onOpenTiltTap;
    private _onCloseTiltTap;
    private _onStopTiltTap;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-cover-tilt-controls": HaCoverTiltControls;
    }
}
export {};
