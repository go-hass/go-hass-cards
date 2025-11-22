import { ReactiveElement } from "lit";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { LovelaceStrategyEditor } from "../types";
import type { OriginalStatesViewStrategyConfig } from "./original-states-view-strategy";
export type OriginalStatesDashboardStrategyConfig = OriginalStatesViewStrategyConfig;
export declare class OriginalStatesDashboardStrategy extends ReactiveElement {
    static generate(config: OriginalStatesDashboardStrategyConfig): Promise<LovelaceConfig>;
    static getConfigElement(): Promise<LovelaceStrategyEditor>;
}
declare global {
    interface HTMLElementTagNameMap {
        "original-states-dashboard-strategy": OriginalStatesDashboardStrategy;
    }
}
