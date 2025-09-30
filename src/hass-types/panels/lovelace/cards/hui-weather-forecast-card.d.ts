import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { WeatherForecastCardConfig } from "./types";
declare class HuiWeatherForecastCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): WeatherForecastCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _forecastEvent?;
    private _subscribed?;
    private _sizeController;
    private _needForecastSubscription;
    private _unsubscribeForecastEvents;
    private _subscribeForecastEvents;
    connectedCallback(): void;
    disconnectedCallback(): void;
    getCardSize(): number;
    setConfig(config: WeatherForecastCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleAction;
    private _showValue;
    getGridOptions(): LovelaceGridOptions;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-weather-forecast-card": HuiWeatherForecastCard;
    }
}
export {};
