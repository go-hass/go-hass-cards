import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../state-control/humidifier/ha-state-control-humidifier-humidity";
import type { HomeAssistant } from "../../../types";
import "../card-features/hui-card-features";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { HumidifierCardConfig } from "./types";
export declare class HuiHumidifierCard extends LitElement implements LovelaceCard {
    private _resizeController;
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): HumidifierCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _featureContext;
    getCardSize(): number;
    setConfig(config: HumidifierCardConfig): void;
    private _handleMoreInfo;
    protected updated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    getGridOptions(): LovelaceGridOptions;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-card": HuiHumidifierCard;
    }
}
