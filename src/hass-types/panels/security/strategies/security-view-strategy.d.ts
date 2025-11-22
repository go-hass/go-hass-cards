import { ReactiveElement } from "lit";
import { type EntityFilter } from "../../../common/entity/entity_filter";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
export interface SecurityViewStrategyConfig {
    type: "security";
}
export declare const securityEntityFilters: EntityFilter[];
export declare class SecurityViewStrategy extends ReactiveElement {
    static generate(_config: SecurityViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "security-view-strategy": SecurityViewStrategy;
    }
}
