import { ReactiveElement } from "lit";
import type { LovelaceSectionConfig } from "../../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../../types";
export interface CommonControlSectionStrategyConfig {
    type: "common-controls";
    title?: string;
    icon?: string;
    limit?: number;
    exclude_entities?: string[];
    include_entities?: string[];
    hide_empty?: boolean;
}
export declare class CommonControlsSectionStrategy extends ReactiveElement {
    static generate(config: CommonControlSectionStrategyConfig, hass: HomeAssistant): Promise<LovelaceSectionConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "common-controls-section-strategy": CommonControlsSectionStrategy;
    }
}
