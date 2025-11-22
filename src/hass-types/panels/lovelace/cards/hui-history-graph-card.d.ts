import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/chart/state-history-charts";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-icon-next";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { HistoryGraphCardConfig } from "./types";
export declare const DEFAULT_HOURS_TO_SHOW = 24;
export declare class HuiHistoryGraphCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../editor/config-elements/hui-history-graph-card-editor").HuiHistoryGraphCardEditor>;
    static getStubConfig(): HistoryGraphCardConfig;
    hass?: HomeAssistant;
    private _history?;
    private _statisticsHistory?;
    private _config?;
    private _error?;
    private _names;
    private _entityIds;
    private _entities;
    private _hoursToShow;
    private _interval?;
    private _subscribed?;
    private _stateHistory?;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    setConfig(config: HistoryGraphCardConfig): void;
    private _computeNames;
    willUpdate(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _subscribeHistory;
    private _mergeHistory;
    private _fetchStatistics;
    private _redrawGraph;
    private _setRedrawTimer;
    private _unsubscribeHistory;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-history-graph-card": HuiHistoryGraphCard;
    }
}
