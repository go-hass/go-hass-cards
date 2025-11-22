import { ReactiveElement } from "lit";
import { type EntityFilter } from "../../../common/entity/entity_filter";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
export interface ClimateViewStrategyConfig {
    type: "climate";
}
export declare const climateEntityFilters: EntityFilter[];
export declare class ClimateViewStrategy extends ReactiveElement {
    static generate(_config: ClimateViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "climate-view-strategy": ClimateViewStrategy;
    }
}
