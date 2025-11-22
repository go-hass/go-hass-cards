import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-fab";
import "../../../components/ha-button";
import "../../../components/ha-tooltip";
import type { CloudStatus } from "../../../data/cloud";
import type { ExposeEntitySettings } from "../../../data/expose";
import "../../../layouts/hass-loading-screen";
import "../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../types";
import "./expose/expose-assistant-icon";
export declare class VoiceAssistantsExpose extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatus;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    exposedEntities?: Record<string, ExposeEntitySettings>;
    _entities: HomeAssistant["entities"];
    private _extEntities?;
    private _filter;
    private _searchParms;
    private _selectedEntities;
    private _supportedEntities?;
    private _activeSorting?;
    private _activeGrouping?;
    private _activeCollapsed?;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    private _dataTable;
    private _columns;
    private _getEntityFilterFuncs;
    private _availableAssistants;
    private _filteredEntities;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _locationChanged;
    private _popState;
    private _fetchEntities;
    private _fetchSupportedEntities;
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _addEntry;
    private _handleSearchChange;
    private _handleSelectionChanged;
    private _removeEntity;
    private _unexposeSelected;
    private _exposeSelected;
    private _clearSelection;
    private _openEditEntry;
    private _clearFilter;
    private _handleSortingChanged;
    private _handleGroupingChanged;
    private _handleCollapseChanged;
    private _handleColumnsChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-voice-assistants-expose": VoiceAssistantsExpose;
    }
}
