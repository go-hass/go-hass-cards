import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../layouts/hass-subpage";
import "../../../components/ha-card";
import "../../../components/ha-md-list";
import "../../../components/ha-md-list-item";
import "../../../components/ha-icon-next";
import type { HomeAssistant, Route } from "../../../types";
import "./ha-config-network";
import "./ha-config-url-form";
import "./supervisor-hostname";
import "./supervisor-network";
declare class HaConfigSectionNetwork extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-network": HaConfigSectionNetwork;
    }
}
export {};
