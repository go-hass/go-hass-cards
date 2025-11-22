import "@thomasloven/round-slider";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-state-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { LightCardConfig } from "./types";
export declare class HuiLightCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): LightCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _brightnessTimout?;
    getCardSize(): number;
    setConfig(config: LightCardConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    private _dragEvent;
    private _showBrightness;
    private _hideBrightness;
    private _setBrightness;
    private _computeBrightness;
    private _computeColor;
    private _handleAction;
    private _handleMoreInfo;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-light-card": HuiLightCard;
    }
}
