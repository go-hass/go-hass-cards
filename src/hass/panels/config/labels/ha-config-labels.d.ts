import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-fab";
import "../../../components/ha-icon";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../types";
export declare class HaConfigLabels extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _labels;
    private _filter;
    private _activeSorting?;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    private _overflowMenu?;
    private _overflowLabel;
    private _columns;
    private _data;
    private _toggleOverflowMenu;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _editLabel;
    private _showHelp;
    private _fetchLabels;
    private _addLabel;
    private _openDialog;
    private _createLabel;
    private _updateLabel;
    private _handleRemoveLabelClick;
    private _removeLabel;
    private _navigateEntities;
    private _navigateDevices;
    private _navigateAutomations;
    private _handleSortingChanged;
    private _handleSearchChange;
    private _handleColumnsChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-labels": HaConfigLabels;
    }
}
