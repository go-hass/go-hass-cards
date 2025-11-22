import type { HassEntity } from "home-assistant-js-websocket";
type FilterOperator = "==" | "<=" | "<" | ">=" | ">" | "!=" | "in" | "not in" | "regex";
export type LegacyStateFilter = {
    operator: FilterOperator;
    attribute?: string;
    value: string | number | (string | number)[];
} | number | string;
export declare const evaluateStateFilter: (stateObj: HassEntity, filter: LegacyStateFilter) => boolean;
export {};
