import type { HomeAssistant } from "../types";
export interface GoogleEntity {
    entity_id: string;
    traits: string[];
    might_2fa: boolean;
    disable_2fa?: boolean;
}
export declare const fetchCloudGoogleEntities: (hass: HomeAssistant) => Promise<GoogleEntity[]>;
export declare const fetchCloudGoogleEntity: (hass: HomeAssistant, entity_id: string) => Promise<GoogleEntity>;
export declare const syncCloudGoogleEntities: (hass: HomeAssistant) => Promise<unknown>;
