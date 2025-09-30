import type { UnsubscribeFunc } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export interface GenericPreview {
    state: string;
    attributes: Record<string, any>;
    error?: string;
}
export declare const subscribePreviewGeneric: (hass: HomeAssistant, domain: string, flow_id: string, flow_type: "config_flow" | "options_flow" | "config_subentries_flow", user_input: Record<string, any>, callback: (preview: GenericPreview) => void) => Promise<UnsubscribeFunc>;
export declare const previewModule: (domain: string) => string;
