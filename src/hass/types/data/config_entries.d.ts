import type { UnsubscribeFunc } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import type { IntegrationType } from "./integration";
export interface ConfigEntry {
    entry_id: string;
    domain: string;
    title: string;
    source: string;
    state: "loaded" | "setup_error" | "migration_error" | "setup_retry" | "not_loaded" | "failed_unload" | "setup_in_progress";
    supports_options: boolean;
    supports_remove_device: boolean;
    supports_unload: boolean;
    supports_reconfigure: boolean;
    supported_subentry_types: Record<string, {
        supports_reconfigure: boolean;
    }>;
    num_subentries: number;
    pref_disable_new_entities: boolean;
    pref_disable_polling: boolean;
    disabled_by: "user" | null;
    reason: string | null;
    error_reason_translation_key: string | null;
    error_reason_translation_placeholders: Record<string, string> | null;
}
export interface SubEntry {
    subentry_id: string;
    subentry_type: string;
    title: string;
    unique_id: string;
}
export declare const getSubEntries: (hass: HomeAssistant, entry_id: string) => Promise<SubEntry[]>;
export declare const updateSubEntry: (hass: HomeAssistant, entry_id: string, subentry_id: string, updatedValues: SubEntryMutableParams) => Promise<unknown>;
export declare const deleteSubEntry: (hass: HomeAssistant, entry_id: string, subentry_id: string) => Promise<unknown>;
export type ConfigEntryMutableParams = Partial<Pick<ConfigEntry, "title" | "pref_disable_new_entities" | "pref_disable_polling">>;
export type SubEntryMutableParams = Partial<Pick<SubEntry, "title">>;
export declare const ERROR_STATES: ConfigEntry["state"][];
export declare const RECOVERABLE_STATES: ConfigEntry["state"][];
export interface ConfigEntryUpdate {
    type: null | "added" | "removed" | "updated";
    entry: ConfigEntry;
}
export declare const subscribeConfigEntries: (hass: HomeAssistant, callbackFunction: (message: ConfigEntryUpdate[]) => void, filters?: {
    type?: IntegrationType[];
    domain?: string;
}) => Promise<UnsubscribeFunc>;
export declare const getConfigEntries: (hass: HomeAssistant, filters?: {
    type?: IntegrationType[];
    domain?: string;
}) => Promise<ConfigEntry[]>;
export declare const getConfigEntry: (hass: HomeAssistant, configEntryId: string) => Promise<{
    config_entry: ConfigEntry;
}>;
export declare const updateConfigEntry: (hass: HomeAssistant, configEntryId: string, updatedValues: ConfigEntryMutableParams) => Promise<{
    require_restart: boolean;
    config_entry: ConfigEntry;
}>;
export declare const deleteConfigEntry: (hass: HomeAssistant, configEntryId: string) => Promise<{
    require_restart: boolean;
}>;
export declare const reloadConfigEntry: (hass: HomeAssistant, configEntryId: string) => Promise<{
    require_restart: boolean;
}>;
export interface DisableConfigEntryResult {
    require_restart: boolean;
}
export declare const disableConfigEntry: (hass: HomeAssistant, configEntryId: string) => Promise<DisableConfigEntryResult>;
export declare const enableConfigEntry: (hass: HomeAssistant, configEntryId: string) => Promise<{
    require_restart: boolean;
}>;
export declare const sortConfigEntries: (configEntries: ConfigEntry[], primaryConfigEntry: string | null) => ConfigEntry[];
