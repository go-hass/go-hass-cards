import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-button";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard } from "../types";
import type { EmptyStateCardConfig } from "./types";
export declare class HuiEmptyStateCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    getCardSize(): number;
    setConfig(_config: EmptyStateCardConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-empty-state-card": HuiEmptyStateCard;
    }
}
