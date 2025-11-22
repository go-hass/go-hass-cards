import type { LatLngExpression, LatLngTuple, Layer, Map } from "leaflet";
import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import type { HomeAssistant, ThemeMode } from "../../types";
import "../ha-icon-button";
import "./ha-entity-marker";
declare global {
    interface HASSDomEvents {
        "map-clicked": {
            location: [number, number];
        };
    }
}
export interface HaMapPathPoint {
    point: LatLngTuple;
    timestamp: Date;
}
export interface HaMapPaths {
    points: HaMapPathPoint[];
    color?: string;
    name?: string;
    gradualOpacity?: number;
    fullDatetime?: boolean;
}
export interface HaMapEntity {
    entity_id: string;
    color: string;
    label_mode?: "name" | "state" | "attribute" | "icon";
    attribute?: string;
    unit?: string;
    name?: string;
    focus?: boolean;
}
export declare class HaMap extends ReactiveElement {
    hass: HomeAssistant;
    entities?: string[] | HaMapEntity[];
    paths?: HaMapPaths[];
    layers?: Layer[];
    clickable: boolean;
    autoFit: boolean;
    renderPassive: boolean;
    interactiveZones: boolean;
    fitZones: boolean;
    themeMode: ThemeMode;
    zoom: number;
    clusterMarkers: boolean;
    private _loaded;
    leafletMap?: Map;
    private Leaflet?;
    private _resizeObserver?;
    private _mapItems;
    private _mapFocusItems;
    private _mapZones;
    private _mapFocusZones;
    private _mapCluster;
    private _mapPaths;
    private _clickCount;
    private _isProgrammaticFit;
    private _pauseAutoFit;
    connectedCallback(): void;
    private _handleVisibilityChange;
    disconnectedCallback(): void;
    protected update(changedProps: PropertyValues): void;
    private get _darkMode();
    private _updateMapStyle;
    private _loading;
    private _loadMap;
    fitMap(options?: {
        zoom?: number;
        pad?: number;
        unpause_autofit?: boolean;
    }): void;
    fitBounds(boundingbox: LatLngExpression[], options?: {
        zoom?: number;
        pad?: number;
    }): void;
    private _drawLayers;
    private _computePathTooltip;
    private _drawPaths;
    private _drawEntities;
    private _attachObserver;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-map": HaMap;
    }
}
