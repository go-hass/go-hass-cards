import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { PageNavigation } from "../layouts/hass-tabs-subpage";
import type { HomeAssistant } from "../types";
import "./ha-icon-next";
import "./ha-md-list";
import "./ha-md-list-item";
import "./ha-svg-icon";
declare class HaNavigationList extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    pages: PageNavigation[];
    hasSecondary: boolean;
    label?: string;
    render(): TemplateResult;
    private _handleExternalApp;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-navigation-list": HaNavigationList;
    }
}
export {};
