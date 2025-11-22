import { ReactiveElement } from "lit";
import type { AreasDisplayValue } from "../../../../components/ha-areas-display-editor";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface OriginalStatesViewStrategyConfig {
    type: "original-states";
    areas?: AreasDisplayValue;
    hide_entities_without_area?: boolean;
    hide_energy?: boolean;
}
export declare class OriginalStatesViewStrategy extends ReactiveElement {
    static generate(config: OriginalStatesViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "original-states-view-strategy": OriginalStatesViewStrategy;
    }
}
