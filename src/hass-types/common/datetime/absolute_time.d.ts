import type { HassConfig } from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "../../data/translation";
export declare const absoluteTime: (from: Date, locale: FrontendLocaleData, config: HassConfig, to?: Date) => string;
