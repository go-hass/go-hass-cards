import type { HassConfig } from "home-assistant-js-websocket";
import type { BarSeriesOption } from "echarts/types/dist/shared";
import type { FrontendLocaleData } from "../../../../../data/translation";
import type { ECOption } from "../../../../../resources/echarts/echarts";
export declare function getSuggestedMax(dayDifference: number, end: Date): number;
export declare function getSuggestedPeriod(dayDifference: number): "month" | "day" | "hour";
export declare function getCommonOptions(start: Date, end: Date, locale: FrontendLocaleData, config: HassConfig, unit?: string, compareStart?: Date, compareEnd?: Date, formatTotal?: (total: number) => string): ECOption;
export declare function fillDataGapsAndRoundCaps(datasets: BarSeriesOption[]): void;
export declare function getCompareTransform(start: Date, compareStart?: Date): (ts: Date) => Date;
