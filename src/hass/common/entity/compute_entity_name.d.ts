import type { HassEntity } from "home-assistant-js-websocket";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry } from "../../data/entity_registry";
import type { HomeAssistant } from "../../types";
export declare const computeEntityName: (stateObj: HassEntity, entities: HomeAssistant["entities"], devices: HomeAssistant["devices"]) => string | undefined;
export declare const computeEntityEntryName: (entry: EntityRegistryDisplayEntry | EntityRegistryEntry, devices: HomeAssistant["devices"], fallbackStateObj?: HassEntity) => string | undefined;
export declare const entityUseDeviceName: (stateObj: HassEntity, entities: HomeAssistant["entities"], devices: HomeAssistant["devices"]) => boolean;
