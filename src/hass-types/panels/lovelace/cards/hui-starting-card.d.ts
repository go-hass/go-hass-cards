import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-spinner";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard } from "../types";
export declare class HuiStartingCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    getCardSize(): number;
    setConfig(_config: LovelaceCardConfig): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-starting-card": HuiStartingCard;
    }
}
