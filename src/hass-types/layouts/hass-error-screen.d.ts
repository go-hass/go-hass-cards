import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/ha-icon-button-arrow-prev";
import "../components/ha-button";
import "../components/ha-menu-button";
import type { HomeAssistant } from "../types";
import "../components/ha-alert";
declare class HassErrorScreen extends LitElement {
    hass: HomeAssistant;
    toolbar: boolean;
    rootnav: boolean;
    narrow: boolean;
    error?: string;
    protected render(): TemplateResult;
    private _handleBack;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hass-error-screen": HassErrorScreen;
    }
}
export {};
