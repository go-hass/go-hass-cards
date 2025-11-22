import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/entity/ha-entity-picker";
import "../../components/ha-date-range-picker";
import "../../components/ha-icon-button";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-menu-button";
import "../../components/ha-target-picker";
import "../../components/ha-top-app-bar-fixed";
import type { HomeAssistant } from "../../types";
import "./ha-logbook";
export declare class HaPanelLogbook extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    _time: {
        range: [Date, Date];
    };
    _entityIds?: string[];
    private _showBack?;
    private _targetPickerValue;
    private _sensorNumericDeviceClasses?;
    constructor();
    private _goBack;
    protected render(): import("lit-html").TemplateResult<1>;
    private _filterFunc;
    protected willUpdate(changedProps: PropertyValues): void;
    private _loadNumericDeviceClasses;
    protected firstUpdated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _locationChanged;
    private _getEntityIds;
    private __getEntityIds;
    private _applyURLParams;
    private _dateRangeChanged;
    private _targetsChanged;
    private _updatePath;
    private _refreshLogbook;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-logbook": HaPanelLogbook;
    }
}
