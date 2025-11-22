import type { Connection } from "home-assistant-js-websocket";
import type { HaDurationData } from "../components/ha-duration-input";
import type { HomeAssistant } from "../types";
export interface RecorderInfo {
    backlog: number | null;
    db_in_default_location: boolean;
    max_backlog: number;
    migration_in_progress: boolean;
    migration_is_live: boolean;
    recording: boolean;
    thread_running: boolean;
}
export type StatisticType = "change" | "state" | "sum" | "min" | "max" | "mean";
export type Statistics = Record<string, StatisticValue[]>;
export interface StatisticValue {
    start: number;
    end: number;
    change?: number | null;
    last_reset?: number | null;
    max?: number | null;
    mean?: number | null;
    min?: number | null;
    sum?: number | null;
    state?: number | null;
}
export interface Statistic {
    max: number | null;
    mean: number | null;
    min: number | null;
    change: number | null;
}
export declare enum StatisticMeanType {
    NONE = 0,
    ARITHMETIC = 1,
    CIRCULAR = 2
}
export interface StatisticsMetaData {
    statistics_unit_of_measurement: string | null;
    statistic_id: string;
    source: string;
    name?: string | null;
    has_sum: boolean;
    mean_type: StatisticMeanType;
    unit_class: string | null;
}
export declare const STATISTIC_TYPES: StatisticsValidationResult["type"][];
export type StatisticsValidationResult = StatisticsValidationResultNoState | StatisticsValidationResultEntityNotRecorded | StatisticsValidationResultEntityNoLongerRecorded | StatisticsValidationResultStateClassRemoved | StatisticsValidationResultUnitsChanged | StatisticsValidationResultMeanTypeChanged;
export interface StatisticsValidationResultNoState {
    type: "no_state";
    data: {
        statistic_id: string;
    };
}
export interface StatisticsValidationResultEntityNoLongerRecorded {
    type: "entity_no_longer_recorded";
    data: {
        statistic_id: string;
    };
}
export interface StatisticsValidationResultEntityNotRecorded {
    type: "entity_not_recorded";
    data: {
        statistic_id: string;
    };
}
export interface StatisticsValidationResultStateClassRemoved {
    type: "state_class_removed";
    data: {
        statistic_id: string;
    };
}
export interface StatisticsValidationResultUnitsChanged {
    type: "units_changed";
    data: {
        statistic_id: string;
        state_unit: string;
        state_unit_class: string | null;
        metadata_unit: string;
        metadata_unit_class: string | null;
        supported_unit: string;
    };
}
export interface StatisticsValidationResultMeanTypeChanged {
    type: "mean_type_changed";
    data: {
        statistic_id: string;
        state_mean_type: StatisticMeanType;
        metadata_mean_type: StatisticMeanType;
    };
}
export declare const VOLUME_UNITS: readonly ["L", "gal", "ft³", "m³", "CCF", "MCF"];
export interface StatisticsUnitConfiguration {
    energy?: "Wh" | "kWh" | "MWh" | "GJ";
    power?: "W" | "kW";
    pressure?: "Pa" | "hPa" | "kPa" | "bar" | "cbar" | "mbar" | "inHg" | "psi" | "mmHg";
    temperature?: "°C" | "°F" | "K";
    volume?: (typeof VOLUME_UNITS)[number];
}
declare const _statisticTypes: readonly ["change", "last_reset", "max", "mean", "min", "state", "sum"];
export type StatisticsTypes = (typeof _statisticTypes)[number][];
export type StatisticsValidationResults = Record<string, StatisticsValidationResult[]>;
export declare const getRecorderInfo: (conn: Connection) => Promise<RecorderInfo>;
export declare const getStatisticIds: (hass: HomeAssistant, statistic_type?: "mean" | "sum") => Promise<StatisticsMetaData[]>;
export declare const getStatisticMetadata: (hass: HomeAssistant, statistic_ids?: string[]) => Promise<StatisticsMetaData[]>;
export declare const fetchStatistics: (hass: HomeAssistant, startTime: Date, endTime?: Date, statistic_ids?: string[], period?: "5minute" | "hour" | "day" | "week" | "month", units?: StatisticsUnitConfiguration, types?: StatisticsTypes) => Promise<Statistics>;
export declare const fetchStatistic: (hass: HomeAssistant, statistic_id: string, period: {
    fixed_period?: {
        start: string | Date;
        end: string | Date;
    };
    calendar?: {
        period: string;
        offset: number;
    };
    rolling_window?: {
        duration: HaDurationData;
        offset: HaDurationData;
    };
}, units?: StatisticsUnitConfiguration) => Promise<Statistic>;
export declare const validateStatistics: (hass: HomeAssistant) => Promise<StatisticsValidationResults>;
export declare const updateStatisticsMetadata: (hass: HomeAssistant, statistic_id: string, unit_of_measurement: string | null, unit_class: string | null) => Promise<undefined>;
export declare const clearStatistics: (hass: HomeAssistant, statistic_ids: string[]) => Promise<undefined>;
export declare const calculateStatisticSumGrowth: (values?: StatisticValue[]) => number | null;
export declare const calculateStatisticsSumGrowth: (data: Statistics, stats: string[]) => number | null;
export declare const statisticsHaveType: (stats: StatisticValue[], type: StatisticType) => boolean;
export declare const statisticsMetaHasType: (metadata: StatisticsMetaData, type: StatisticType) => boolean;
export declare const adjustStatisticsSum: (hass: HomeAssistant, statistic_id: string, start_time: number, adjustment: number, adjustment_unit_of_measurement: string | null) => Promise<void>;
export declare const getStatisticLabel: (hass: HomeAssistant, statisticsId: string, statisticsMetaData: StatisticsMetaData | undefined) => string;
export declare const getDisplayUnit: (hass: HomeAssistant, statisticsId: string | undefined, statisticsMetaData: StatisticsMetaData | undefined) => string | null | undefined;
export declare const isExternalStatistic: (statisticsId: string) => boolean;
export declare const updateStatisticsIssues: (hass: HomeAssistant) => Promise<undefined>;
export {};
