import type { HassConfig } from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "../../data/translation";
export declare const formatTime: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatTimeWithSeconds: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatTimeWeekday: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatTime24h: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
