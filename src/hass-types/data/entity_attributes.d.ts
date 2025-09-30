import type { FrontendLocaleData } from "./translation";
export declare const STATE_ATTRIBUTES: string[];
export declare const STATE_ATTRIBUTES_DOMAIN_CLASS: {
    sensor: {
        enum: string[];
    };
};
export declare const TEMPERATURE_ATTRIBUTES: Set<string>;
export declare const DOMAIN_ATTRIBUTES_UNITS: {
    readonly climate: {
        readonly humidity: "%";
        readonly current_humidity: "%";
        readonly target_humidity_low: "%";
        readonly target_humidity_high: "%";
        readonly target_humidity_step: "%";
        readonly min_humidity: "%";
        readonly max_humidity: "%";
    };
    readonly cover: {
        readonly current_position: "%";
        readonly current_tilt_position: "%";
    };
    readonly fan: {
        readonly percentage: "%";
    };
    readonly humidifier: {
        readonly humidity: "%";
        readonly current_humidity: "%";
        readonly min_humidity: "%";
        readonly max_humidity: "%";
    };
    readonly light: {
        readonly color_temp: "mired";
        readonly max_mireds: "mired";
        readonly min_mireds: "mired";
        readonly color_temp_kelvin: "K";
        readonly min_color_temp_kelvin: "K";
        readonly max_color_temp_kelvin: "K";
        readonly brightness: "%";
    };
    readonly sun: {
        readonly azimuth: "°";
        readonly elevation: "°";
    };
    readonly vacuum: {
        readonly battery_level: "%";
    };
    readonly valve: {
        readonly current_position: "%";
    };
    readonly sensor: {
        readonly battery_level: "%";
    };
    readonly media_player: {
        readonly volume_level: "%";
    };
};
type Formatter = (value: number, locale: FrontendLocaleData) => string;
export declare const DOMAIN_ATTRIBUTES_FORMATERS: Record<string, Record<string, Formatter>>;
export declare const NON_NUMERIC_ATTRIBUTES: string[];
export {};
