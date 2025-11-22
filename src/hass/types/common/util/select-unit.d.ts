import type { FrontendLocaleData } from "../../data/translation";
export type Unit = "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year";
export declare function selectUnit(from: Date | number, to: Date | number, locale: FrontendLocaleData, thresholds?: Partial<Thresholds>): {
    value: number;
    unit: Unit;
};
type Thresholds = Record<"second" | "minute" | "hour" | "day" | "week" | "month", number>;
export declare const DEFAULT_THRESHOLDS: Thresholds;
export {};
