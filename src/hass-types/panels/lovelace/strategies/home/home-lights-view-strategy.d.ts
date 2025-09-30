import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface HomeLightsViewStrategyConfig {
    type: "home-lights";
}
export declare class HomeLightsViewStrategy extends ReactiveElement {
    static generate(_config: HomeLightsViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-lights-view-strategy": HomeLightsViewStrategy;
    }
}
