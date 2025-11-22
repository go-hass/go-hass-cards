import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/map/ha-map";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { MapCardConfig } from "./types";
export declare const DEFAULT_HOURS_TO_SHOW = 0;
export declare const DEFAULT_ZOOM = 14;
declare class HuiMapCard extends LitElement implements LovelaceCard {
    hass: HomeAssistant;
    layout?: string;
    private _stateHistory?;
    private _config?;
    private _map?;
    private _configEntities?;
    private _mapEntities;
    private _colorDict;
    private _colorIndex;
    private _error?;
    private _clusterMarkers;
    private _subscribed?;
    private _getAllEntities;
    setConfig(config: MapCardConfig): void;
    getCardSize(): number;
    static getConfigElement(): Promise<import("../editor/config-elements/hui-map-card-editor").HuiMapCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): MapCardConfig;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected willUpdate(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _subscribeHistory;
    private _unsubscribeHistory;
    protected updated(changedProps: PropertyValues): void;
    private _computePadding;
    private _resetFocus;
    private _toggleClusterMarkers;
    private _getColor;
    private _getSourceEntities;
    private _getMapEntities;
    private _getHistoryPaths;
    getGridOptions(): LovelaceGridOptions;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-map-card": HuiMapCard;
    }
}
export {};
