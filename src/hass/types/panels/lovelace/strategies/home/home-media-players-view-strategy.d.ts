import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface HomeMediaPlayersViewStrategyConfig {
    type: "home-media-players";
}
export declare class HomeMMediaPlayersViewStrategy extends ReactiveElement {
    static generate(_config: HomeMediaPlayersViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-media-players-view-strategy": HomeMMediaPlayersViewStrategy;
    }
}
