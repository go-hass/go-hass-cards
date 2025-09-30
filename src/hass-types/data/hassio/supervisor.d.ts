import type { HomeAssistant, PanelInfo } from "../../types";
import type { SupervisorArch } from "../supervisor/supervisor";
import type { HassioResponse } from "./common";
export interface HassioHomeAssistantInfo {
    arch: SupervisorArch;
    audio_input: string | null;
    audio_output: string | null;
    boot: boolean;
    image: string;
    ip_address: string;
    machine: string;
    port: number;
    ssl: boolean;
    update_available: boolean;
    version_latest: string;
    version: string;
    wait_boot: number;
    watchdog: boolean;
}
export interface HassioSupervisorInfo {
    addons: string[];
    addons_repositories: string[];
    arch: SupervisorArch;
    channel: string;
    debug: boolean;
    debug_block: boolean;
    diagnostics: boolean | null;
    healthy: boolean;
    ip_address: string;
    logging: string;
    supported: boolean;
    timezone: string;
    update_available: boolean;
    version: string;
    version_latest: string;
    wait_boot: number;
}
export interface HassioInfo {
    arch: SupervisorArch;
    channel: string;
    docker: string;
    features: string[];
    hassos: null;
    homeassistant: string;
    hostname: string;
    logging: string;
    machine: string;
    state: "initialize" | "setup" | "startup" | "running" | "freeze" | "shutdown" | "stopping" | "close";
    operating_system: string;
    supervisor: string;
    supported: boolean;
    supported_arch: SupervisorArch[];
    timezone: string;
}
export interface HassioBoots {
    boots: Record<number, string>;
}
export type HassioPanelInfo = PanelInfo<undefined | {
    ingress?: string;
}>;
export interface CreateSessionResponse {
    session: string;
}
export interface SupervisorOptions {
    channel?: "beta" | "dev" | "stable";
    diagnostics?: boolean;
    addons_repositories?: string[];
}
export declare const reloadSupervisor: (hass: HomeAssistant) => Promise<void>;
export declare const restartSupervisor: (hass: HomeAssistant) => Promise<void>;
export declare const updateSupervisor: (hass: HomeAssistant) => Promise<void>;
export declare const fetchHassioHomeAssistantInfo: (hass: HomeAssistant) => Promise<HassioHomeAssistantInfo>;
export declare const fetchHassioSupervisorInfo: (hass: HomeAssistant) => Promise<HassioSupervisorInfo>;
export declare const fetchHassioInfo: (hass: HomeAssistant) => Promise<HassioInfo>;
export declare const fetchHassioBoots: (hass: HomeAssistant) => Promise<HassioResponse<HassioBoots>>;
export declare const fetchHassioLogsLegacy: (hass: HomeAssistant, provider: string) => Promise<string>;
export declare const fetchHassioLogs: (hass: HomeAssistant, provider: string, range?: string, boot?: number) => Promise<Response>;
export declare const fetchHassioLogsFollow: (hass: HomeAssistant, provider: string, signal: AbortSignal, lines?: number, boot?: number) => Promise<Response>;
export declare const fetchHassioLogsFollowSkip: (hass: HomeAssistant, provider: string, signal: AbortSignal, cursor: string, skipLines: number, lines?: number, boot?: number) => Promise<Response>;
export declare const getHassioLogDownloadUrl: (provider: string) => string;
export declare const getHassioLogDownloadLinesUrl: (provider: string, lines: number, boot?: number) => string;
export declare const setSupervisorOption: (hass: HomeAssistant, data: SupervisorOptions) => Promise<void>;
export declare const coreLatestLogsUrl = "/api/hassio/core/logs/latest";
