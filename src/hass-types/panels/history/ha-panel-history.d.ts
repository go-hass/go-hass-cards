import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/chart/state-history-charts";
import "../../components/ha-button-menu";
import "../../components/ha-date-range-picker";
import "../../components/ha-icon-button";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-list-item";
import "../../components/ha-menu-button";
import "../../components/ha-spinner";
import "../../components/ha-target-picker";
import "../../components/ha-top-app-bar-fixed";
import type { HomeAssistant } from "../../types";
declare class HaPanelHistory extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    rtl: boolean;
    private _startDate;
    private _endDate;
    private _targetPickerValue;
    private _isLoading;
    private _stateHistory?;
    private _mungedStateHistory?;
    private _statisticsHistory?;
    private _showBack?;
    private _stateHistoryCharts?;
    private _subscribed?;
    private _interval?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _goBack;
    protected render(): import("lit-html").TemplateResult<1>;
    willUpdate(changedProps: PropertyValues): void;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _removeAll;
    private _getStats;
    private _getHistory;
    private _setRedrawTimer;
    private _unsubscribeHistory;
    private _getEntityIds;
    private __getEntityIds;
    private _dateRangeChanged;
    private _targetsChanged;
    private _updatePath;
    private _handleMenuAction;
    private _downloadHistory;
    private _suggestCard;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-history": HaPanelHistory;
    }
}
export {};
