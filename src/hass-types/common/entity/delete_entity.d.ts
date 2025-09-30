import type { HomeAssistant } from "../../types";
import type { IntegrationManifest } from "../../data/integration";
import type { Helper } from "../../panels/config/helpers/const";
import type { EntityRegistryEntry } from "../../data/entity_registry";
import type { ConfigEntry } from "../../data/config_entries";
export declare const isDeletableEntity: (hass: HomeAssistant, entity_id: string, manifests: IntegrationManifest[], entityRegistry: EntityRegistryEntry[], configEntries: ConfigEntry[], fetchedHelpers: Helper[]) => boolean;
export declare const deleteEntity: (hass: HomeAssistant, entity_id: string, manifests: IntegrationManifest[], entityRegistry: EntityRegistryEntry[], configEntries: ConfigEntry[], fetchedHelpers: Helper[]) => void;
