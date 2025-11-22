import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-next";
import "../../../components/ha-navigation-list";
import type { PageNavigation } from "../../../layouts/hass-tabs-subpage";
import type { HomeAssistant } from "../../../types";
declare class HaConfigNavigation extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    pages: PageNavigation[];
    protected render(): TemplateResult;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-navigation": HaConfigNavigation;
    }
}
export {};
