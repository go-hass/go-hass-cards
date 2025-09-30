import type { HomeAssistant } from "../types";
export interface OpenStreetMapPlace {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    place_rank: number;
    category: string;
    type: string;
    importance: number;
    addresstype: string;
    name: string | null;
    display_name: string;
    address: {
        house_number?: string;
        road?: string;
        neighbourhood?: string;
        city?: string;
        municipality?: string;
        state?: string;
        country?: string;
        postcode?: string;
        country_code: string;
        [key: string]: string | undefined;
    };
    boundingbox: number[];
}
export declare const searchPlaces: (address: string, hass: HomeAssistant, addressdetails?: boolean, limit?: number) => Promise<OpenStreetMapPlace[]>;
export declare const reverseGeocode: (location: [number, number], hass: HomeAssistant, zoom?: number) => Promise<OpenStreetMapPlace>;
