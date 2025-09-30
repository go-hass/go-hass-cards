import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface EntitiesDisplay {
    hidden?: string[];
    order?: string[];
}
export interface AreaViewStrategyConfig {
    type: "area";
    area?: string;
    groups_options?: Record<string, EntitiesDisplay>;
}
export declare class AreaViewStrategy extends ReactiveElement {
    static generate(config: AreaViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "area-view-strategy": AreaViewStrategy;
    }
}
