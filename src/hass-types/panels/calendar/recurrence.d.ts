import type { Options, WeekdayStr } from "rrule";
import { Frequency, Weekday } from "rrule";
import type { HomeAssistant } from "../../types";
export type RepeatFrequency = "none" | "yearly" | "monthly" | "weekly" | "daily";
export type RepeatEnd = "never" | "on" | "after";
export declare const DEFAULT_COUNT: {
    none: number;
    yearly: number;
    monthly: number;
    weekly: number;
    daily: number;
};
export interface MonthlyRepeatItem {
    value: string;
    byday?: Weekday;
    bymonthday?: number;
    label: string;
}
export declare function untilValue(freq: RepeatFrequency): Date;
export declare const convertFrequency: (freq: Frequency) => RepeatFrequency | undefined;
export declare const convertRepeatFrequency: (freq: RepeatFrequency) => Frequency | undefined;
export declare const WEEKDAYS: Weekday[];
/** Return a weekday number compatible with rrule.js weekdays */
export declare function getWeekday(dtstart: Date): number;
export declare function getWeekdays(firstDay?: number): Weekday[];
export declare function ruleByWeekDay(weekdays: Set<WeekdayStr>): Weekday[];
/**
 * Returns the list of repeat values available for the specified date.
 */
export declare function getMonthlyRepeatItems(hass: HomeAssistant, interval: number, dtstart: Date): MonthlyRepeatItem[];
export declare function getMonthlyRepeatWeekdayFromRule(rrule: Partial<Options>): Weekday | undefined;
export declare function getMonthdayRepeatFromRule(rrule: Partial<Options>): number | undefined;
/**
 * A wrapper around RRule.toText that assists with translation.
 */
export declare function renderRRuleAsText(hass: HomeAssistant, value: string): string;
