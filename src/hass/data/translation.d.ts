import type { HomeAssistant } from "../types";
export declare enum NumberFormat {
    language = "language",
    system = "system",
    comma_decimal = "comma_decimal",
    decimal_comma = "decimal_comma",
    quote_decimal = "quote_decimal",
    space_comma = "space_comma",
    none = "none"
}
export declare enum TimeFormat {
    language = "language",
    system = "system",
    am_pm = "12",
    twenty_four = "24"
}
export declare enum TimeZone {
    local = "local",
    server = "server"
}
export declare enum DateFormat {
    language = "language",
    system = "system",
    DMY = "DMY",
    MDY = "MDY",
    YMD = "YMD"
}
export declare enum FirstWeekday {
    language = "language",
    monday = "monday",
    tuesday = "tuesday",
    wednesday = "wednesday",
    thursday = "thursday",
    friday = "friday",
    saturday = "saturday",
    sunday = "sunday"
}
export interface FrontendLocaleData {
    language: string;
    number_format: NumberFormat;
    time_format: TimeFormat;
    date_format: DateFormat;
    first_weekday: FirstWeekday;
    time_zone: TimeZone;
}
declare global {
    interface FrontendUserData {
        language: FrontendLocaleData;
    }
}
export type TranslationCategory = "title" | "state" | "entity" | "entity_component" | "exceptions" | "config" | "config_subentries" | "config_panel" | "options" | "device_automation" | "mfa_setup" | "system_health" | "application_credentials" | "issues" | "selector" | "services";
export declare const subscribeTranslationPreferences: (hass: HomeAssistant, callback: (data: {
    value: FrontendLocaleData | null;
}) => void) => Promise<() => Promise<void>>;
export declare const saveTranslationPreferences: (hass: HomeAssistant, data: FrontendLocaleData) => Promise<void>;
export declare const getHassTranslations: (hass: HomeAssistant, language: string, category: TranslationCategory, integration?: string | string[], config_flow?: boolean) => Promise<Record<string, unknown>>;
export declare const getHassTranslationsPre109: (hass: HomeAssistant, language: string) => Promise<Record<string, unknown>>;
