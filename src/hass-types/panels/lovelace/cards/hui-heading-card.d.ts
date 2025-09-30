import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon";
import "../../../components/ha-icon-next";
import "../../../components/ha-state-icon";
import "../../../state-display/state-display";
import type { HomeAssistant } from "../../../types";
import "../heading-badges/hui-heading-badge";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { HeadingCardConfig } from "./types";
export declare const migrateHeadingCardConfig: (config: HeadingCardConfig) => HeadingCardConfig;
export declare class HuiHeadingCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): HeadingCardConfig;
    hass?: HomeAssistant;
    preview: boolean;
    private _config?;
    setConfig(config: HeadingCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private _handleAction;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-heading-card": HuiHeadingCard;
    }
}
