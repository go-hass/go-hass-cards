import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button-menu";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "./ha-config-analytics";
declare class HaConfigSectionAnalytics extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    protected render(): TemplateResult;
    private _handleOverflowAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-analytics": HaConfigSectionAnalytics;
    }
}
export {};
