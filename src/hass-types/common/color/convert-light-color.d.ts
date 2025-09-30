export declare const DEFAULT_MIN_KELVIN = 2700;
export declare const DEFAULT_MAX_KELVIN = 6500;
export declare const temperature2rgb: (temperature: number) => [number, number, number];
export declare const mired2kelvin: (miredTemperature: number) => number;
export declare const kelvin2mired: (kelvinTemperature: number) => number;
export declare const rgbww2rgb: (rgbww: [number, number, number, number, number], minKelvin?: number, maxKelvin?: number) => [number, number, number];
export declare const rgbw2rgb: (rgbw: [number, number, number, number]) => [number, number, number];
