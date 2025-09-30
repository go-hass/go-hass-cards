import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
interface InputSelectEntityAttributes extends HassEntityAttributeBase {
    options: string[];
}
export interface InputSelectEntity extends HassEntityBase {
    attributes: InputSelectEntityAttributes;
}
export interface InputSelect {
    id: string;
    name: string;
    options: string[];
    icon?: string;
    initial?: string;
}
export interface InputSelectMutableParams {
    name: string;
    icon: string;
    initial: string;
    options: string[];
}
export declare const setInputSelectOption: (hass: HomeAssistant, entity: string, option: string) => Promise<import("../types").ServiceCallResponse<any>>;
export declare const fetchInputSelect: (hass: HomeAssistant) => Promise<InputSelect[]>;
export declare const createInputSelect: (hass: HomeAssistant, values: InputSelectMutableParams) => Promise<InputSelect>;
export declare const updateInputSelect: (hass: HomeAssistant, id: string, updates: Partial<InputSelectMutableParams>) => Promise<InputSelect>;
export declare const deleteInputSelect: (hass: HomeAssistant, id: string) => Promise<unknown>;
export {};
