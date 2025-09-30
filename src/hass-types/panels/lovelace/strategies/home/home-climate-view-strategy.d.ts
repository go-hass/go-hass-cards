import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface HomeClimateViewStrategyConfig {
    type: "home-climate";
}
export declare class HomeClimateViewStrategy extends ReactiveElement {
    static generate(_config: HomeClimateViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-climate-view-strategy": HomeClimateViewStrategy;
    }
}
