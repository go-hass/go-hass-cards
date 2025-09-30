import { ReactiveElement } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { LovelaceStrategyConfig } from "../../../data/lovelace/config/strategy";
export declare class EnergyViewStrategy extends ReactiveElement {
    static generate(_config: LovelaceStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "energy-view-strategy": EnergyViewStrategy;
    }
}
