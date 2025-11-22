import { ReactiveElement } from "lit";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceStrategyEditor } from "../types";
export interface HomeDashboardStrategyConfig {
    type: "home";
    favorite_entities?: string[];
}
export declare class HomeDashboardStrategy extends ReactiveElement {
    static generate(config: HomeDashboardStrategyConfig, hass: HomeAssistant): Promise<LovelaceConfig>;
    static getConfigElement(): Promise<LovelaceStrategyEditor>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-dashboard-strategy": HomeDashboardStrategy;
    }
}
