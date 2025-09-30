import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
interface TextEntityAttributes extends HassEntityAttributeBase {
    min?: number;
    max?: number;
    pattern?: string;
    mode?: "text" | "password";
}
export interface TextEntity extends HassEntityBase {
    attributes: TextEntityAttributes;
}
export declare const setValue: (hass: HomeAssistant, entity: string, value: string) => Promise<import("../types").ServiceCallResponse<any>>;
export {};
