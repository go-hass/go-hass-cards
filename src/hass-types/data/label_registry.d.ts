import type { Connection } from "home-assistant-js-websocket";
import type { Store } from "home-assistant-js-websocket/dist/store";
import type { HaDevicePickerDeviceFilterFunc } from "../components/device/ha-device-picker";
import type { PickerComboBoxItem } from "../components/ha-picker-combo-box";
import type { HomeAssistant } from "../types";
import type { HaEntityPickerEntityFilterFunc } from "./entity";
import type { RegistryEntry } from "./registry";
export interface LabelRegistryEntry extends RegistryEntry {
    label_id: string;
    name: string;
    icon: string | null;
    color: string | null;
    description: string | null;
}
export interface LabelRegistryEntryMutableParams {
    name: string;
    icon?: string | null;
    color?: string | null;
    description?: string | null;
}
export declare const fetchLabelRegistry: (conn: Connection) => Promise<LabelRegistryEntry[]>;
export declare const subscribeLabelRegistryUpdates: (conn: Connection, store: Store<LabelRegistryEntry[]>) => Promise<() => Promise<void>>;
export declare const subscribeLabelRegistry: (conn: Connection, onChange: (labels: LabelRegistryEntry[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
export declare const createLabelRegistryEntry: (hass: HomeAssistant, values: LabelRegistryEntryMutableParams) => Promise<LabelRegistryEntry>;
export declare const updateLabelRegistryEntry: (hass: HomeAssistant, labelId: string, updates: Partial<LabelRegistryEntryMutableParams>) => Promise<LabelRegistryEntry>;
export declare const deleteLabelRegistryEntry: (hass: HomeAssistant, labelId: string) => Promise<unknown>;
export declare const getLabels: (hass: HomeAssistant, labels?: LabelRegistryEntry[], includeDomains?: string[], excludeDomains?: string[], includeDeviceClasses?: string[], deviceFilter?: HaDevicePickerDeviceFilterFunc, entityFilter?: HaEntityPickerEntityFilterFunc, excludeLabels?: string[]) => PickerComboBoxItem[];
