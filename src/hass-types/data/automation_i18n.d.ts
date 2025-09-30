import type { HomeAssistant } from "../types";
import type { Condition, Trigger } from "./automation";
import type { EntityRegistryEntry } from "./entity_registry";
export declare const describeTrigger: (trigger: Trigger, hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], ignoreAlias?: boolean) => string;
export declare const describeCondition: (condition: Condition, hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], ignoreAlias?: boolean) => string;
