import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface HomeAreaViewStrategyConfig {
    type: "home-area";
    area?: string;
}
export declare class HomeAreaViewStrategy extends ReactiveElement {
    static generate(config: HomeAreaViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-area-view-strategy": HomeAreaViewStrategy;
    }
}
