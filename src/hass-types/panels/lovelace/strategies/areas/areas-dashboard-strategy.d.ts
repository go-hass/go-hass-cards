import { ReactiveElement } from "lit";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceStrategyEditor } from "../types";
import type { EntitiesDisplay } from "./area-view-strategy";
interface AreaOptions {
    card_size?: "small" | "large";
    groups_options?: Record<string, EntitiesDisplay>;
}
export interface AreasDashboardStrategyConfig {
    type: "areas";
    areas_display?: {
        hidden?: string[];
        order?: string[];
    };
    floors_display?: {
        order?: string[];
    };
    areas_options?: Record<string, AreaOptions>;
}
export declare class AreasDashboardStrategy extends ReactiveElement {
    static generate(config: AreasDashboardStrategyConfig, hass: HomeAssistant): Promise<LovelaceConfig>;
    static getConfigElement(): Promise<LovelaceStrategyEditor>;
}
declare global {
    interface HTMLElementTagNameMap {
        "areas-dashboard-strategy": AreasDashboardStrategy;
    }
}
export {};
