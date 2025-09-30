import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
export declare const enum LightEntityFeature {
    EFFECT = 4,
    FLASH = 8,
    TRANSITION = 32
}
export declare const enum LightColorMode {
    UNKNOWN = "unknown",
    ONOFF = "onoff",
    BRIGHTNESS = "brightness",
    COLOR_TEMP = "color_temp",
    HS = "hs",
    XY = "xy",
    RGB = "rgb",
    RGBW = "rgbw",
    RGBWW = "rgbww",
    WHITE = "white"
}
export declare const lightSupportsColorMode: (entity: LightEntity, mode: LightColorMode) => boolean;
export declare const lightIsInColorMode: (entity: LightEntity) => boolean;
export declare const lightSupportsColor: (entity: LightEntity) => boolean;
export declare const lightSupportsBrightness: (entity: LightEntity) => boolean;
export declare const lightSupportsFavoriteColors: (entity: LightEntity) => boolean;
export declare const getLightCurrentModeRgbColor: (entity: LightEntity) => number[] | undefined;
interface LightEntityAttributes extends HassEntityAttributeBase {
    min_color_temp_kelvin?: number;
    max_color_temp_kelvin?: number;
    min_mireds?: number;
    max_mireds?: number;
    brightness?: number;
    xy_color?: [number, number];
    hs_color?: [number, number];
    color_temp?: number;
    color_temp_kelvin?: number;
    rgb_color?: [number, number, number];
    rgbw_color?: [number, number, number, number];
    rgbww_color?: [number, number, number, number, number];
    effect?: string;
    effect_list?: string[] | null;
    supported_color_modes?: LightColorMode[];
    color_mode?: LightColorMode;
}
export interface LightEntity extends HassEntityBase {
    attributes: LightEntityAttributes;
}
export type LightColor = {
    color_temp_kelvin: number;
} | {
    hs_color: [number, number];
} | {
    rgb_color: [number, number, number];
} | {
    rgbw_color: [number, number, number, number];
} | {
    rgbww_color: [number, number, number, number, number];
};
export declare const computeDefaultFavoriteColors: (stateObj: LightEntity) => LightColor[];
export declare const formatTempColor: (value: number) => string;
export {};
