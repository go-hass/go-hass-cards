import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { ClockCardConfig } from "./types";
export declare class HuiClockCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): ClockCardConfig;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ClockCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-clock-card": HuiClockCard;
    }
}
