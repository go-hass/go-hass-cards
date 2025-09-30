import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare const enum AssistSatelliteEntityFeature {
    ANNOUNCE = 1
}
export interface WakeWordInterceptMessage {
    wake_word_phrase: string;
}
export interface WakeWordOption {
    id: string;
    wake_word: string;
    trained_languages: string[];
}
export interface AssistSatelliteConfiguration {
    active_wake_words: string[];
    available_wake_words: WakeWordOption[];
    max_active_wake_words: number;
    pipeline_entity_id: string;
    vad_entity_id: string;
}
export declare const interceptWakeWord: (hass: HomeAssistant, entity_id: string, callback: (result: WakeWordInterceptMessage) => void) => Promise<() => Promise<void>>;
export declare const testAssistSatelliteConnection: (hass: HomeAssistant, entity_id: string) => Promise<{
    status: "success" | "timeout";
}>;
export declare const assistSatelliteAnnounce: (hass: HomeAssistant, entity_id: string, args: {
    message?: string;
    media_id?: string;
    preannounce?: boolean;
    preannounce_media_id?: string;
}) => Promise<import("../types").ServiceCallResponse<any>>;
export declare const fetchAssistSatelliteConfiguration: (hass: HomeAssistant, entity_id: string) => Promise<AssistSatelliteConfiguration>;
export declare const setWakeWords: (hass: HomeAssistant, entity_id: string, wake_word_ids: string[]) => Promise<unknown>;
export declare const assistSatelliteSupportsSetupFlow: (assistSatelliteEntity: HassEntity | undefined) => boolean;
