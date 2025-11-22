import { LitElement, nothing } from "lit";
import type { CoverEntity } from "../data/cover";
import type { HomeAssistant } from "../types";
import "./ha-icon-button";
declare class HaCoverControls extends LitElement {
    hass: HomeAssistant;
    stateObj: CoverEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _onOpenTap;
    private _onCloseTap;
    private _onStopTap;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-cover-controls": HaCoverControls;
    }
}
export {};
