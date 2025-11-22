import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/data-table/ha-data-table-icon";
import "../../../components/ha-fab";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../types";
export declare class HaConfigUsers extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _users;
    private _activeSorting?;
    private _activeGrouping?;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    private _filter;
    private _activeCollapsed?;
    private _columns;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _userData;
    private _fetchUsers;
    private _editUser;
    private _addUser;
    private _handleSortingChanged;
    private _handleGroupingChanged;
    private _handleCollapseChanged;
    private _handleSearchChange;
    private _handleColumnsChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-users": HaConfigUsers;
    }
}
