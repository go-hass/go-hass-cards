import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { EntitiesCardEntityConfig } from "../cards/types";
import "../components/hui-generic-entity-row";
import type { LovelaceRow } from "./types";
declare class HuiWeatherEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    private _forecastEvent?;
    private _subscribed?;
    private _unsubscribeForecastEvents;
    private _subscribeForecastEvents;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setConfig(config: EntitiesCardEntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleAction;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-weather-entity-row": HuiWeatherEntityRow;
    }
}
export {};
