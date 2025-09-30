import type { LatLngExpression } from "leaflet";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant, ThemeMode } from "../../types";
import "../ha-input-helper-text";
import "./ha-map";
declare global {
    interface HASSDomEvents {
        "location-updated": {
            id: string;
            location: [number, number];
        };
        "markers-updated": undefined;
        "radius-updated": {
            id: string;
            radius: number;
        };
        "marker-clicked": {
            id: string;
        };
    }
}
export interface MarkerLocation {
    latitude: number;
    longitude: number;
    radius?: number;
    name?: string;
    id: string;
    icon?: string;
    iconPath?: string;
    radius_color?: string;
    location_editable?: boolean;
    radius_editable?: boolean;
}
export declare class HaLocationsEditor extends LitElement {
    hass: HomeAssistant;
    locations?: MarkerLocation[];
    helper?: string;
    autoFit: boolean;
    zoom: number;
    themeMode: ThemeMode;
    pinOnClick: boolean;
    private _locationMarkers?;
    private _circles;
    private map;
    private Leaflet?;
    private _loadPromise;
    constructor();
    fitMap(options?: {
        zoom?: number;
        pad?: number;
    }): void;
    fitBounds(boundingbox: LatLngExpression[], options?: {
        zoom?: number;
        pad?: number;
    }): void;
    fitMarker(id: string, options?: {
        zoom?: number;
    }): Promise<void>;
    protected render(): TemplateResult;
    private _getLayers;
    willUpdate(changedProps: PropertyValues): void;
    updated(changedProps: PropertyValues): void;
    private _normalizeLongitude;
    private _updateLocation;
    private _updateRadius;
    private _markerClicked;
    private _mapClicked;
    private _updateMarkers;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-locations-editor": HaLocationsEditor;
    }
}
