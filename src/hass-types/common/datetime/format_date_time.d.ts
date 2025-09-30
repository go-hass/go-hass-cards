import type { HassConfig } from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "../../data/translation";
export declare const formatDateTime: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateTimeWithBrowserDefaults: (dateObj: Date) => string;
export declare const formatShortDateTimeWithYear: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatShortDateTime: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatShortDateTimeWithConditionalYear: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateTimeWithSeconds: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateTimeNumeric: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
