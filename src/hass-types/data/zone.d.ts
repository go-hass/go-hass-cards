import type { HomeAssistant } from "../types";
export interface Zone {
    id: string;
    name: string;
    icon?: string;
    latitude: number;
    longitude: number;
    passive?: boolean;
    radius?: number;
}
export interface HomeZoneMutableParams {
    name?: string;
    latitude: number;
    longitude: number;
    radius: number;
}
export interface ZoneMutableParams {
    name: string;
    icon?: string;
    latitude: number;
    longitude: number;
    passive?: boolean;
    radius?: number;
}
export declare const fetchZones: (hass: HomeAssistant) => Promise<Zone[]>;
export declare const createZone: (hass: HomeAssistant, values: ZoneMutableParams) => Promise<Zone>;
export declare const updateZone: (hass: HomeAssistant, zoneId: string, updates: Partial<ZoneMutableParams>) => Promise<Zone>;
export declare const deleteZone: (hass: HomeAssistant, zoneId: string) => Promise<unknown>;
export declare const showZoneEditor: (data?: Partial<ZoneMutableParams>) => void;
export declare const getZoneEditorInitData: () => Partial<ZoneMutableParams>;
