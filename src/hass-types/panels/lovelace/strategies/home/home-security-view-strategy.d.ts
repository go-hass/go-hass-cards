import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface HomeSecurityViewStrategyConfig {
    type: "home-security";
}
export declare class HomeSecurityViewStrategy extends ReactiveElement {
    static generate(_config: HomeSecurityViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-security-view-strategy": HomeSecurityViewStrategy;
    }
}
