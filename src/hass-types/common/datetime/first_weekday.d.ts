import type { FrontendLocaleData } from "../../data/translation";
export declare const weekdays: readonly ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
type WeekdayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export declare const firstWeekdayIndex: (locale: FrontendLocaleData) => WeekdayIndex;
export declare const firstWeekday: (locale: FrontendLocaleData) => "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
export {};
