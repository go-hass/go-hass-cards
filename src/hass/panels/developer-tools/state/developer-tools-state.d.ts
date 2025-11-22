import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../components/entity/ha-entity-picker";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-checkbox";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-icon-button";
import "../../../components/ha-input-helper-text";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tip";
import "../../../components/ha-yaml-editor";
import "../../../components/search-input";
import type { HomeAssistant } from "../../../types";
import "./developer-tools-state-renderer";
declare class HaPanelDevState extends LitElement {
    hass: HomeAssistant;
    private _error;
    private _entityId;
    private _entityFilter;
    private _stateFilter;
    private _attributeFilter;
    private _entity?;
    private _state;
    private _stateAttributes;
    private _expanded;
    private _validJSON;
    private _showAttributes;
    narrow: boolean;
    private _yamlEditor?;
    private _filteredEntities;
    protected render(): import("lit-html").TemplateResult<1>;
    private _copyStateEntity;
    private _entitySelected;
    private _updateEditor;
    private _entityIdChanged;
    private _updateEntity;
    private _stateChanged;
    private _entityFilterChanged;
    private _stateFilterChanged;
    private _attributeFilterChanged;
    private _getHistoryURL;
    private _historyFromLastChanged;
    private _historyFromLastUpdated;
    private _expandedChanged;
    private _handleSetState;
    private _applyFiltersOnEntities;
    private _lastChangedString;
    private _lastUpdatedString;
    private _saveAttributeCheckboxState;
    private _yamlChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "developer-tools-state": HaPanelDevState;
    }
}
export {};
