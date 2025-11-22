import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon";
import "../../../components/ha-ripple";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-info";
import "../../../state-display/state-display";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { HomeSummaryCard } from "./types";
export declare class HuiHomeSummaryCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: HomeSummaryCard): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private _handleAction;
    private get _hasCardAction();
    private _computeSummaryState;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-home-summary-card": HuiHomeSummaryCard;
    }
}
