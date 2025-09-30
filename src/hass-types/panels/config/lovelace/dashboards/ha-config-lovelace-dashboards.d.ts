import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-fab";
import "../../../../components/ha-icon";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-md-button-menu";
import "../../../../components/ha-md-list-item";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import "../../../../layouts/hass-loading-screen";
import "../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../types";
export declare class HaConfigLovelaceDashboards extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _dashboards;
    private _filter;
    private _activeSorting?;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    willUpdate(): void;
    private _columns;
    private _getItems;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _getDashboards;
    private _navigate;
    private _editDashboard;
    private _addDashboard;
    private _openDetailDialog;
    private _handleSortingChanged;
    private _handleSearchChange;
    private _handleColumnsChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-lovelace-dashboards": HaConfigLovelaceDashboards;
    }
}
