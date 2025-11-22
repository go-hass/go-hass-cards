import type { HaDurationData } from "../../components/ha-duration-input";
import type { FrontendLocaleData } from "../../data/translation";
export declare const formatNumericDuration: (locale: FrontendLocaleData, duration: HaDurationData) => string;
export declare const formatDurationLong: (locale: FrontendLocaleData, duration: HaDurationData) => string;
export declare const formatDurationDigital: (locale: FrontendLocaleData, duration: HaDurationData) => string;
export declare const DURATION_UNITS: readonly ["min", "h", "d"];
type DurationUnit = (typeof DURATION_UNITS)[number];
export declare const formatDuration: (locale: FrontendLocaleData, duration: string, unit: DurationUnit, precision?: number | undefined) => string;
export {};
