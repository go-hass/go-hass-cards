import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../../types";
export declare const DEFAULT_ENTITY_NAME: ({
    type: "device";
} | {
    type: "entity";
})[];
export type EntityNameItem = {
    type: "entity" | "device" | "area" | "floor";
} | {
    type: "text";
    text: string;
};
export interface EntityNameOptions {
    separator?: string;
}
export declare const computeEntityNameDisplay: (stateObj: HassEntity, name: EntityNameItem | EntityNameItem[] | undefined, entities: HomeAssistant["entities"], devices: HomeAssistant["devices"], areas: HomeAssistant["areas"], floors: HomeAssistant["floors"], options?: EntityNameOptions) => string;
export declare const computeEntityNameList: (stateObj: HassEntity, name: EntityNameItem[], entities: HomeAssistant["entities"], devices: HomeAssistant["devices"], areas: HomeAssistant["areas"], floors: HomeAssistant["floors"]) => (string | undefined)[];
