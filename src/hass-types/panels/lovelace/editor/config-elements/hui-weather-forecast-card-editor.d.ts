import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { WeatherForecastCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiWeatherForecastCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: WeatherForecastCardConfig): void;
    private get _stateObj();
    private get _hasForecast();
    private _forecastSupported;
    private _modernForecastSupported;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-weather-forecast-card-editor": HuiWeatherForecastCardEditor;
    }
}
