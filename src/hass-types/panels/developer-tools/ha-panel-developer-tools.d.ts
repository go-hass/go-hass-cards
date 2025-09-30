import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button-menu";
import "../../components/ha-icon-button";
import "../../components/ha-list-item";
import "../../components/ha-menu-button";
import "../../components/ha-tab-group";
import "../../components/ha-tab-group-tab";
import type { HomeAssistant, Route } from "../../types";
import "./developer-tools-router";
declare class PanelDeveloperTools extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    protected firstUpdated(changedProps: any): void;
    protected render(): TemplateResult;
    private _handlePageSelected;
    private _handleMenuAction;
    private get _page();
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-developer-tools": PanelDeveloperTools;
    }
}
export {};
