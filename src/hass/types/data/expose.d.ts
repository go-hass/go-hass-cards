import type { HomeAssistant } from "../types";
export declare const voiceAssistants: {
    readonly conversation: {
        readonly domain: "assist_pipeline";
        readonly name: "Assist";
    };
    readonly "cloud.alexa": {
        readonly domain: "alexa";
        readonly name: "Amazon Alexa";
    };
    readonly "cloud.google_assistant": {
        readonly domain: "google_assistant";
        readonly name: "Google Assistant";
    };
};
export interface ExposeEntitySettings {
    conversation?: boolean;
    "cloud.alexa"?: boolean;
    "cloud.google_assistant"?: boolean;
}
export declare const setExposeNewEntities: (hass: HomeAssistant, assistant: string, expose_new: boolean) => Promise<unknown>;
export declare const getExposeNewEntities: (hass: HomeAssistant, assistant: string) => Promise<{
    expose_new: boolean;
}>;
export declare const exposeEntities: (hass: HomeAssistant, assistants: string[], entity_ids: string[], should_expose: boolean) => Promise<unknown>;
export declare const listExposedEntities: (hass: HomeAssistant) => Promise<{
    exposed_entities: Record<string, ExposeEntitySettings>;
}>;
