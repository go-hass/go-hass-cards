import type { HassEventBase } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare const EVENT_TAG_SCANNED = "tag_scanned";
export interface TagScannedEvent extends HassEventBase {
    event_type: "tag_scanned";
    data: {
        tag_id: string;
        device_id?: string;
    };
}
export interface Tag {
    id: string;
    name?: string;
    description?: string;
    last_scanned?: string;
}
export interface UpdateTagParams {
    name?: Tag["name"];
    description?: Tag["description"];
}
export declare const fetchTags: (hass: HomeAssistant) => Promise<Tag[]>;
export declare const createTag: (hass: HomeAssistant, params: UpdateTagParams, tagId?: string) => Promise<Tag>;
export declare const updateTag: (hass: HomeAssistant, tagId: string, params: UpdateTagParams) => Promise<Tag>;
export declare const deleteTag: (hass: HomeAssistant, tagId: string) => Promise<undefined>;
