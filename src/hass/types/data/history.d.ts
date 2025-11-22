import type { HassEntity } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
import type { Statistics } from "./recorder";
export interface LineChartState {
    state: string;
    last_changed: number;
    attributes?: Record<string, any>;
}
export interface LineChartEntity {
    domain: string;
    name: string;
    entity_id: string;
    states: LineChartState[];
    statistics?: LineChartState[];
}
export interface LineChartUnit {
    unit: string;
    device_class?: string;
    identifier: string;
    data: LineChartEntity[];
}
export interface TimelineState {
    state_localize: string;
    state: string;
    last_changed: number;
}
export interface TimelineEntity {
    name: string;
    entity_id: string;
    data: TimelineState[];
}
export interface HistoryResult {
    line: LineChartUnit[];
    timeline: TimelineEntity[];
}
export type HistoryStates = Record<string, EntityHistoryState[]>;
export interface EntityHistoryState {
    /** state */
    s: string;
    /** attributes */
    a: Record<string, any>;
    /** last_changed; if set, also applies to lu */
    lc?: number;
    /** last_updated */
    lu: number;
}
export interface HistoryStreamMessage {
    states: HistoryStates;
    start_time?: number;
    end_time?: number;
}
export declare const entityIdHistoryNeedsAttributes: (hass: HomeAssistant, entityId: string) => boolean;
export declare const fetchDateWS: (hass: HomeAssistant, startTime: Date, endTime: Date, entityIds: string[]) => Promise<HistoryStates>;
export declare const subscribeHistory: (hass: HomeAssistant, callbackFunction: (data: HistoryStates) => void, startTime: Date, endTime: Date, entityIds: string[]) => Promise<() => Promise<void>>;
export declare const subscribeHistoryStatesTimeWindow: (hass: HomeAssistant, callbackFunction: (data: HistoryStates) => void, hoursToShow: number, entityIds: string[], noAttributes?: boolean, minimalResponse?: boolean, significantChangesOnly?: boolean) => Promise<() => Promise<void>>;
export declare const convertStatisticsToHistory: (hass: HomeAssistant, statistics: Statistics, statisticIds: string[], sensorNumericDeviceClasses: string[], splitDeviceClasses?: boolean) => HistoryResult;
export declare const computeHistory: (hass: HomeAssistant, stateHistory: HistoryStates, entityIds: string[], localize: LocalizeFunc, sensorNumericalDeviceClasses: string[], splitDeviceClasses?: boolean, forceNumeric?: boolean) => HistoryResult;
export declare const computeGroupKey: (unit: string | undefined, device_class: string | undefined, splitDeviceClasses: boolean) => string;
export declare const isNumericEntity: (domain: string, currentState: HassEntity | undefined, numericStateFromHistory: EntityHistoryState | undefined, sensorNumericalDeviceClasses: string[], forceNumeric?: boolean) => boolean;
export declare const mergeHistoryResults: (historyResult: HistoryResult, ltsResult?: HistoryResult, splitDeviceClasses?: boolean) => HistoryResult;
