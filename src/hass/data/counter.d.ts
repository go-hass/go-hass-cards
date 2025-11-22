import type { HomeAssistant } from "../types";
export interface Counter {
    id: string;
    name: string;
    icon?: string;
    initial?: number;
    restore?: boolean;
    minimum?: number;
    maximum?: number;
    step?: number;
}
export interface CounterMutableParams {
    name: string;
    icon: string;
    initial: number;
    restore: boolean;
    minimum: number;
    maximum: number;
    step: number;
}
export declare const fetchCounter: (hass: HomeAssistant) => Promise<Counter[]>;
export declare const createCounter: (hass: HomeAssistant, values: CounterMutableParams) => Promise<Counter>;
export declare const updateCounter: (hass: HomeAssistant, id: string, updates: Partial<CounterMutableParams>) => Promise<Counter>;
export declare const deleteCounter: (hass: HomeAssistant, id: string) => Promise<unknown>;
