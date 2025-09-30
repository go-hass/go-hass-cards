import type { HomeAssistant } from "../types";
export interface InputBoolean {
    id: string;
    name: string;
    icon?: string;
    initial?: boolean;
}
export interface InputBooleanMutableParams {
    name: string;
    icon: string;
    initial: boolean;
}
export declare const fetchInputBoolean: (hass: HomeAssistant) => Promise<InputBoolean[]>;
export declare const createInputBoolean: (hass: HomeAssistant, values: InputBooleanMutableParams) => Promise<InputBoolean>;
export declare const updateInputBoolean: (hass: HomeAssistant, id: string, updates: Partial<InputBooleanMutableParams>) => Promise<InputBoolean>;
export declare const deleteInputBoolean: (hass: HomeAssistant, id: string) => Promise<unknown>;
