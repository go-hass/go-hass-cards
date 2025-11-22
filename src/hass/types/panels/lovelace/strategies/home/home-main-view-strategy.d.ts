import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface HomeMainViewStrategyConfig {
    type: "home-main";
    favorite_entities?: string[];
}
export declare class HomeMainViewStrategy extends ReactiveElement {
    static generate(config: HomeMainViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-main-view-strategy": HomeMainViewStrategy;
    }
}
