import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-fab";
import "../../../../components/ha-svg-icon";
import "../../../../layouts/hass-loading-screen";
import "../../../../layouts/hass-subpage";
import "../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../types";
export declare class HaConfigLovelaceResources extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _resources;
    private _filter;
    private _activeSorting?;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    private _columns;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _getResources;
    private _editResource;
    private _addResource;
    private _openDialog;
    private _removeResource;
    private _handleSortingChanged;
    private _handleSearchChange;
    private _handleColumnsChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-lovelace-resources": HaConfigLovelaceResources;
    }
}
