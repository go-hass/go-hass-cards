import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../state-control/climate/ha-state-control-climate-temperature";
import "../../../state-control/water_heater/ha-state-control-water_heater-temperature";
import type { HomeAssistant } from "../../../types";
import "../card-features/hui-card-features";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { ThermostatCardConfig } from "./types";
export declare class HuiThermostatCard extends LitElement implements LovelaceCard {
    private _resizeController;
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): ThermostatCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _featureContext;
    getCardSize(): number;
    setConfig(config: ThermostatCardConfig): void;
    private _handleMoreInfo;
    protected updated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    getGridOptions(): LovelaceGridOptions;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-thermostat-card": HuiThermostatCard;
    }
}
