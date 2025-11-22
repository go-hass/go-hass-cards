import type { HassConfig } from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "../../data/translation";
export declare const calcDate: (date: Date, fn: (date: Date, options?: any) => Date, locale: FrontendLocaleData, config: HassConfig, options?: any) => Date;
export declare const calcDateProperty: (date: Date, fn: (date: Date, options?: any) => boolean | number, locale: FrontendLocaleData, config: HassConfig, options?: any) => number | boolean;
export declare const calcDateDifferenceProperty: (endDate: Date, startDate: Date, fn: (date: Date, options?: any) => boolean | number, locale: FrontendLocaleData, config: HassConfig) => number | boolean;
export declare const shiftDateRange: (startDate: Date, endDate: Date, forward: boolean, locale: FrontendLocaleData, config: any) => {
    start: Date;
    end: Date;
};
/**
 * @description Parses a date in browser display timezone
 * @param date - The date to parse
 * @param timezone - The timezone to parse the date in
 * @returns The parsed date as a Date object
 */
export declare const parseDate: (date: string, timezone: string) => Date;
/**
 * @description Formats a date in browser display timezone
 * @param date - The date to format
 * @param timezone - The timezone to format the date in
 * @returns The formatted date in YYYY-MM-DD format
 */
export declare const formatDate: (date: Date, timezone: string) => string;
/**
 * @description Formats a time in browser display timezone
 * @param date - The date to format
 * @param timezone - The timezone to format the time in
 * @returns The formatted time in HH:mm:ss format
 */
export declare const formatTime: (date: Date, timezone: string) => string;
