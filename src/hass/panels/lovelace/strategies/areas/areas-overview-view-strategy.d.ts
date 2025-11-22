import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
import type { EntitiesDisplay } from "./area-view-strategy";
interface AreaOptions {
    groups_options?: Record<string, EntitiesDisplay>;
    card_size?: "small" | "large";
}
export interface AreasViewStrategyConfig {
    type: "areas-overview";
    areas_display?: {
        hidden?: string[];
        order?: string[];
    };
    floors_display?: {
        order?: string[];
    };
    areas_options?: Record<string, AreaOptions>;
}
export declare class AreasOverviewViewStrategy extends ReactiveElement {
    static generate(config: AreasViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "areas-overview-view-strategy": AreasOverviewViewStrategy;
    }
}
export {};
