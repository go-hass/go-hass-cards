import type { HomeAssistant } from "../../types";
export interface HassioResponse<T> {
    data: T;
    message?: string;
    result: "ok" | "error";
}
export interface HassioStats {
    blk_read: number;
    blk_write: number;
    cpu_percent: number;
    memory_limit: number;
    memory_percent: number;
    memory_usage: number;
    network_rx: number;
    network_tx: number;
}
export declare const hassioApiResultExtractor: <T>(response: HassioResponse<T>) => T;
export declare const extractApiErrorMessage: (error: any) => string;
export declare const ignoreSupervisorError: (error: any) => boolean;
export declare const fetchHassioStats: (hass: HomeAssistant, container: string) => Promise<HassioStats>;
