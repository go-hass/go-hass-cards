import type { HomeAssistant } from "../types";
export interface WyomingInfo {
    asr: WyomingAsrInfo[];
    handle: [];
    intent: [];
    tts: WyomingTtsInfo[];
    wake: [];
}
interface WyomingBaseInfo {
    name: string;
    version: string;
    attribution: Record<string, string>;
}
interface WyomingTtsInfo extends WyomingBaseInfo {
}
interface WyomingAsrInfo extends WyomingBaseInfo {
}
export declare const fetchWyomingInfo: (hass: HomeAssistant) => Promise<{
    info: Record<string, WyomingInfo>;
}>;
export {};
