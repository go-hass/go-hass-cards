import type { HomeAssistant } from "../types";
export interface InputButton {
    id: string;
    name: string;
    icon?: string;
}
export interface InputButtonMutableParams {
    name: string;
    icon: string;
}
export declare const fetchInputButton: (hass: HomeAssistant) => Promise<InputButton[]>;
export declare const createInputButton: (hass: HomeAssistant, values: InputButtonMutableParams) => Promise<InputButton>;
export declare const updateInputButton: (hass: HomeAssistant, id: string, updates: Partial<InputButtonMutableParams>) => Promise<InputButton>;
export declare const deleteInputButton: (hass: HomeAssistant, id: string) => Promise<unknown>;
