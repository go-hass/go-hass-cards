import { ReactiveElement } from "lit";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { MapViewStrategyConfig } from "./map-view-strategy";
export type MapDashboardStrategyConfig = MapViewStrategyConfig;
export declare class MapDashboardStrategy extends ReactiveElement {
    static generate(config: MapDashboardStrategyConfig): Promise<LovelaceConfig>;
    static noEditor: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "map-dashboard-strategy": MapDashboardStrategy;
    }
}
