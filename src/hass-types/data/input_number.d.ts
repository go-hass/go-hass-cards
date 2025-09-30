import type { HomeAssistant } from "../types";
export interface InputNumber {
    id: string;
    name: string;
    min: number;
    max: number;
    step: number;
    mode: "box" | "slider";
    icon?: string;
    initial?: number;
    unit_of_measurement?: string;
}
export interface InputNumberMutableParams {
    name: string;
    icon: string;
    initial: number;
    min: number;
    max: number;
    step: number;
    mode: "box" | "slider";
    unit_of_measurement?: string;
}
export declare const fetchInputNumber: (hass: HomeAssistant) => Promise<InputNumber[]>;
export declare const createInputNumber: (hass: HomeAssistant, values: InputNumberMutableParams) => Promise<InputNumber>;
export declare const updateInputNumber: (hass: HomeAssistant, id: string, updates: Partial<InputNumberMutableParams>) => Promise<InputNumber>;
export declare const deleteInputNumber: (hass: HomeAssistant, id: string) => Promise<unknown>;
