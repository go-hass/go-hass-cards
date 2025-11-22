import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-fab";
import "../../../components/ha-button";
import "../../../components/ha-help-tooltip";
import "../../../components/ha-svg-icon";
import "../../../components/ha-icon-overflow-menu";
import type { ApplicationCredential } from "../../../data/application_credential";
import "../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../types";
export declare class HaConfigApplicationCredentials extends LitElement {
    hass: HomeAssistant;
    _applicationCredentials: ApplicationCredential[];
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _selected;
    private _dataTable;
    private _activeSorting?;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    private _filter;
    private _columns;
    private _getApplicationCredentials;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleSelectionChanged;
    private _deleteCredential;
    private _deleteSelected;
    private _loadTranslations;
    private _fetchApplicationCredentials;
    private _addApplicationCredential;
    private _handleSortingChanged;
    private _handleColumnsChanged;
    private _handleSearchChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-application-credentials": HaConfigApplicationCredentials;
    }
}
