import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface MapViewStrategyConfig {
    type: "map";
}
export declare class MapViewStrategy extends ReactiveElement {
    static generate(_config: MapViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "map-view-strategy": MapViewStrategy;
    }
}
