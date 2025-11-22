import type { Collection } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import type { Statistics, StatisticsMetaData } from "./recorder";
export declare const emptyFlowFromGridSourceEnergyPreference: () => FlowFromGridSourceEnergyPreference;
export declare const emptyFlowToGridSourceEnergyPreference: () => FlowToGridSourceEnergyPreference;
export declare const emptyGridSourceEnergyPreference: () => GridSourceTypeEnergyPreference;
export declare const emptySolarEnergyPreference: () => SolarSourceTypeEnergyPreference;
export declare const emptyBatteryEnergyPreference: () => BatterySourceTypeEnergyPreference;
export declare const emptyGasEnergyPreference: () => GasSourceTypeEnergyPreference;
export declare const emptyWaterEnergyPreference: () => WaterSourceTypeEnergyPreference;
interface EnergySolarForecast {
    wh_hours: Record<string, number>;
}
export type EnergySolarForecasts = Record<string, EnergySolarForecast>;
export interface DeviceConsumptionEnergyPreference {
    stat_consumption: string;
    name?: string;
    included_in_stat?: string;
}
export interface FlowFromGridSourceEnergyPreference {
    stat_energy_from: string;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
}
export interface FlowToGridSourceEnergyPreference {
    stat_energy_to: string;
    stat_compensation: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
}
export interface GridSourceTypeEnergyPreference {
    type: "grid";
    flow_from: FlowFromGridSourceEnergyPreference[];
    flow_to: FlowToGridSourceEnergyPreference[];
    cost_adjustment_day: number;
}
export interface SolarSourceTypeEnergyPreference {
    type: "solar";
    stat_energy_from: string;
    config_entry_solar_forecast: string[] | null;
}
export interface BatterySourceTypeEnergyPreference {
    type: "battery";
    stat_energy_from: string;
    stat_energy_to: string;
}
export interface GasSourceTypeEnergyPreference {
    type: "gas";
    stat_energy_from: string;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
    unit_of_measurement?: string | null;
}
export interface WaterSourceTypeEnergyPreference {
    type: "water";
    stat_energy_from: string;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
    unit_of_measurement?: string | null;
}
export type EnergySource = SolarSourceTypeEnergyPreference | GridSourceTypeEnergyPreference | BatterySourceTypeEnergyPreference | GasSourceTypeEnergyPreference | WaterSourceTypeEnergyPreference;
export interface EnergyPreferences {
    energy_sources: EnergySource[];
    device_consumption: DeviceConsumptionEnergyPreference[];
}
export interface EnergyInfo {
    cost_sensors: Record<string, string>;
    solar_forecast_domains: string[];
}
export interface EnergyValidationIssue {
    type: string;
    affected_entities: [string, unknown][];
    translation_placeholders: Record<string, string>;
}
export interface EnergyPreferencesValidation {
    energy_sources: EnergyValidationIssue[][];
    device_consumption: EnergyValidationIssue[][];
}
export declare const getEnergyInfo: (hass: HomeAssistant) => Promise<EnergyInfo>;
export declare const getEnergyPreferenceValidation: (hass: HomeAssistant) => Promise<EnergyPreferencesValidation>;
export declare const getEnergyPreferences: (hass: HomeAssistant) => Promise<EnergyPreferences>;
export declare const saveEnergyPreferences: (hass: HomeAssistant, prefs: Partial<EnergyPreferences>) => Promise<EnergyPreferences>;
export type FossilEnergyConsumption = Record<string, number>;
export declare const getFossilEnergyConsumption: (hass: HomeAssistant, startTime: Date, energy_statistic_ids: string[], co2_statistic_id: string, endTime?: Date, period?: "5minute" | "hour" | "day" | "month") => Promise<FossilEnergyConsumption>;
export interface EnergySourceByType {
    grid?: GridSourceTypeEnergyPreference[];
    solar?: SolarSourceTypeEnergyPreference[];
    battery?: BatterySourceTypeEnergyPreference[];
    gas?: GasSourceTypeEnergyPreference[];
    water?: WaterSourceTypeEnergyPreference[];
}
export declare const energySourcesByType: (prefs: EnergyPreferences) => EnergySourceByType;
export interface EnergyData {
    start: Date;
    end?: Date;
    startCompare?: Date;
    endCompare?: Date;
    compareMode?: CompareMode;
    prefs: EnergyPreferences;
    info: EnergyInfo;
    stats: Statistics;
    statsMetadata: Record<string, StatisticsMetaData>;
    statsCompare: Statistics;
    co2SignalEntity?: string;
    fossilEnergyConsumption?: FossilEnergyConsumption;
    fossilEnergyConsumptionCompare?: FossilEnergyConsumption;
    waterUnit: string;
    gasUnit: string;
}
export declare const getReferencedStatisticIds: (prefs: EnergyPreferences, info: EnergyInfo, includeTypes?: string[]) => string[];
export declare const enum CompareMode {
    NONE = "",
    PREVIOUS = "previous",
    YOY = "yoy"
}
export interface EnergyCollection extends Collection<EnergyData> {
    start: Date;
    end?: Date;
    compare?: CompareMode;
    prefs?: EnergyPreferences;
    clearPrefs(): void;
    setPeriod(newStart: Date, newEnd?: Date): void;
    setCompare(compare: CompareMode): void;
    _refreshTimeout?: number;
    _updatePeriodTimeout?: number;
    _active: number;
}
export declare const getEnergyDataCollection: (hass: HomeAssistant, options?: {
    prefs?: EnergyPreferences;
    key?: string;
}) => EnergyCollection;
export declare const getEnergySolarForecasts: (hass: HomeAssistant) => Promise<EnergySolarForecasts>;
declare const energyGasUnitClass: readonly ["volume", "energy"];
export type EnergyGasUnitClass = (typeof energyGasUnitClass)[number];
export declare const getEnergyGasUnitClass: (prefs: EnergyPreferences, excludeSource?: string, statisticsMetaData?: Record<string, StatisticsMetaData>) => EnergyGasUnitClass | undefined;
export declare const energyStatisticHelpUrl = "/docs/energy/faq/#troubleshooting-missing-entities";
export interface EnergySumData {
    to_grid?: Record<number, number>;
    from_grid?: Record<number, number>;
    to_battery?: Record<number, number>;
    from_battery?: Record<number, number>;
    solar?: Record<number, number>;
    total: {
        to_grid?: number;
        from_grid?: number;
        to_battery?: number;
        from_battery?: number;
        solar?: number;
    };
    timestamps: number[];
}
export interface EnergyConsumptionData {
    used_total: Record<number, number>;
    grid_to_battery: Record<number, number>;
    battery_to_grid: Record<number, number>;
    solar_to_battery: Record<number, number>;
    solar_to_grid: Record<number, number>;
    used_solar: Record<number, number>;
    used_grid: Record<number, number>;
    used_battery: Record<number, number>;
    total: {
        used_total: number;
        grid_to_battery: number;
        battery_to_grid: number;
        solar_to_battery: number;
        solar_to_grid: number;
        used_solar: number;
        used_grid: number;
        used_battery: number;
    };
}
export declare const getSummedData: import("memoize-one").MemoizedFn<(data: EnergyData) => {
    summedData: EnergySumData;
    compareSummedData?: EnergySumData;
}>;
export declare const computeConsumptionData: import("memoize-one").MemoizedFn<(data: EnergySumData, compareData?: EnergySumData) => {
    consumption: EnergyConsumptionData;
    compareConsumption?: EnergyConsumptionData;
}>;
export declare const computeConsumptionSingle: (data: {
    from_grid: number | undefined;
    to_grid: number | undefined;
    solar: number | undefined;
    to_battery: number | undefined;
    from_battery: number | undefined;
}) => {
    grid_to_battery: number;
    battery_to_grid: number;
    solar_to_battery: number;
    solar_to_grid: number;
    used_solar: number;
    used_grid: number;
    used_battery: number;
    used_total: number;
};
export declare const formatConsumptionShort: (hass: HomeAssistant, consumption: number | null, unit: string, targetUnit?: string) => string;
export declare const calculateSolarConsumedGauge: (hasBattery: boolean, data: EnergySumData) => number | undefined;
export {};
