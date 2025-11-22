import type { HomeAssistant } from "../types";
import type { EntityRegistryEntry } from "./entity_registry";
import type { FloorRegistryEntry } from "./floor_registry";
import type { LabelRegistryEntry } from "./label_registry";
import type { ActionType, ActionTypes } from "./script";
export declare const describeAction: <T extends ActionType>(hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], labelRegistry: LabelRegistryEntry[], floorRegistry: Record<string, FloorRegistryEntry>, action: ActionTypes[T], actionType?: T, ignoreAlias?: boolean) => string;
