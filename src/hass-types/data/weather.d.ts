import type { HassConfig, HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import "../components/ha-svg-icon";
import type { HomeAssistant } from "../types";
export declare const enum WeatherEntityFeature {
    FORECAST_DAILY = 1,
    FORECAST_HOURLY = 2,
    FORECAST_TWICE_DAILY = 4
}
export type ModernForecastType = "hourly" | "daily" | "twice_daily";
export type ForecastType = ModernForecastType | "legacy";
export interface ForecastAttribute {
    temperature: number;
    datetime: string;
    templow?: number;
    precipitation?: number;
    precipitation_probability?: number;
    humidity?: number;
    condition?: string;
    is_daytime?: boolean;
    pressure?: number;
    wind_speed?: string;
}
interface WeatherEntityAttributes extends HassEntityAttributeBase {
    attribution?: string;
    humidity?: number;
    forecast?: ForecastAttribute[];
    is_daytime?: boolean;
    pressure?: number;
    temperature?: number;
    visibility?: number;
    wind_bearing?: number | string;
    wind_speed?: number;
    precipitation_unit: string;
    pressure_unit: string;
    temperature_unit: string;
    visibility_unit: string;
    wind_speed_unit: string;
}
export interface ForecastEvent {
    type: "hourly" | "daily" | "twice_daily";
    forecast: [ForecastAttribute] | null;
}
export interface WeatherEntity extends HassEntityBase {
    attributes: WeatherEntityAttributes;
}
export declare const weatherSVGs: Set<string>;
export declare const weatherIcons: {
    "clear-night": string;
    cloudy: string;
    exceptional: string;
    fog: string;
    hail: string;
    lightning: string;
    "lightning-rainy": string;
    partlycloudy: string;
    pouring: string;
    rainy: string;
    snowy: string;
    "snowy-rainy": string;
    sunny: string;
    windy: string;
    "windy-variant": string;
};
export declare const weatherAttrIcons: {
    apparent_temperature: string;
    cloud_coverage: string;
    dew_point: string;
    humidity: string;
    wind_bearing: string;
    wind_speed: string;
    pressure: string;
    temperature: string;
    uv_index: string;
    visibility: string;
    precipitation: string;
};
export declare const getWind: (hass: HomeAssistant, stateObj: WeatherEntity, speed?: number, bearing?: number | string) => string;
export declare const getWeatherUnit: (config: HassConfig, stateObj: WeatherEntity, measure: string) => string;
export declare const getSecondaryWeatherAttribute: (hass: HomeAssistant, stateObj: WeatherEntity, forecast: ForecastAttribute[]) => TemplateResult | undefined;
export declare const weatherSVGStyles: import("lit").CSSResult;
export declare const getWeatherStateIcon: (state: string, element: HTMLElement, nightTime?: boolean) => TemplateResult | undefined;
export interface WeatherUnits {
    precipitation_unit: string[];
    pressure_unit: string[];
    temperature_unit: string[];
    visibility_unit: string[];
    wind_speed_unit: string[];
}
export declare const getWeatherConvertibleUnits: (hass: HomeAssistant) => Promise<{
    units: WeatherUnits;
}>;
export declare const getForecast: (weather_attributes?: WeatherEntityAttributes | undefined, forecast_event?: ForecastEvent, forecast_type?: ForecastType | undefined) => {
    forecast: ForecastAttribute[];
    type: "daily" | "hourly" | "twice_daily";
} | undefined;
export declare const subscribeForecast: (hass: HomeAssistant, entity_id: string, forecast_type: ModernForecastType, callback: (forecastevent: ForecastEvent) => void) => Promise<() => Promise<void>>;
export declare const getSupportedForecastTypes: (stateObj: HassEntityBase) => ModernForecastType[];
export declare const getDefaultForecastType: (stateObj: HassEntityBase) => "hourly" | "daily" | "twice_daily";
export {};
