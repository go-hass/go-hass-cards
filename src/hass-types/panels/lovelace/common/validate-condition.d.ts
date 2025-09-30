import type { MediaQueriesListener } from "../../../common/dom/media_query";
import type { HomeAssistant } from "../../../types";
export type Condition = LocationCondition | NumericStateCondition | StateCondition | ScreenCondition | UserCondition | OrCondition | AndCondition | NotCondition;
export interface LegacyCondition {
    entity?: string;
    state?: string | string[];
    state_not?: string | string[];
}
interface BaseCondition {
    condition: string;
}
export interface LocationCondition extends BaseCondition {
    condition: "location";
    locations?: string[];
}
export interface NumericStateCondition extends BaseCondition {
    condition: "numeric_state";
    entity?: string;
    below?: string | number;
    above?: string | number;
}
export interface StateCondition extends BaseCondition {
    condition: "state";
    entity?: string;
    state?: string | string[];
    state_not?: string | string[];
}
export interface ScreenCondition extends BaseCondition {
    condition: "screen";
    media_query?: string;
}
export interface UserCondition extends BaseCondition {
    condition: "user";
    users?: string[];
}
export interface OrCondition extends BaseCondition {
    condition: "or";
    conditions?: Condition[];
}
export interface AndCondition extends BaseCondition {
    condition: "and";
    conditions?: Condition[];
}
export interface NotCondition extends BaseCondition {
    condition: "not";
    conditions?: Condition[];
}
/**
 * Return the result of applying conditions
 * @param conditions conditions to apply
 * @param hass Home Assistant object
 * @returns true if conditions are respected
 */
export declare function checkConditionsMet(conditions: (Condition | LegacyCondition)[], hass: HomeAssistant): boolean;
export declare function extractConditionEntityIds(conditions: Condition[]): Set<string>;
/**
 * Validate the conditions config for the UI
 * @param conditions conditions to apply
 * @returns true if conditions are validated
 */
export declare function validateConditionalConfig(conditions: (Condition | LegacyCondition)[]): boolean;
/**
 * Build a condition for filters
 * @param condition condition to apply
 * @param entityId base the condition on that entity
 * @returns a new condition with entity id
 */
export declare function addEntityToCondition(condition: Condition, entityId: string): Condition;
export declare function extractMediaQueries(conditions: Condition[]): string[];
export declare function attachConditionMediaQueriesListeners(conditions: Condition[], onChange: (visibility: boolean) => void): MediaQueriesListener[];
export {};
