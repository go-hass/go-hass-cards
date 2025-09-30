import type { HassConfig } from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "../../data/translation";
export declare function formatTimeLabel(value: number | Date, locale: FrontendLocaleData, config: HassConfig, minutesDifference: number): string;
