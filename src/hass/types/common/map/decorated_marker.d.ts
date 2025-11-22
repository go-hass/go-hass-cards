import type { LatLngExpression, Layer, Map, MarkerOptions } from "leaflet";
import { Marker } from "leaflet";
export declare class DecoratedMarker extends Marker {
    decorationLayer: Layer | undefined;
    constructor(latlng: LatLngExpression, decorationLayer?: Layer, options?: MarkerOptions);
    onAdd(map: Map): this;
    onRemove(map: Map): this;
}
