import { ReactiveElement } from "lit";
import { type EntityFilter } from "../../../common/entity/entity_filter";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
export interface LightViewStrategyConfig {
    type: "light";
}
export declare const lightEntityFilters: EntityFilter[];
export declare class LightViewStrategy extends ReactiveElement {
    static generate(_config: LightViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "light-view-strategy": LightViewStrategy;
    }
}
