import type { Map, TileLayer } from "leaflet";
export type LeafletModuleType = typeof import("leaflet");
export type LeafletDrawModuleType = typeof import("leaflet-draw");
export declare const setupLeafletMap: (mapElement: HTMLElement) => Promise<[Map, LeafletModuleType, TileLayer]>;
export declare const replaceTileLayer: (leaflet: LeafletModuleType, map: Map, tileLayer: TileLayer) => TileLayer;
