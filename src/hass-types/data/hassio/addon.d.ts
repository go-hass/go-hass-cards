import type { HaFormSchema } from "../../components/ha-form/types";
import type { HomeAssistant, TranslationDict } from "../../types";
import type { StoreAddonDetails } from "../supervisor/store";
import type { Supervisor, SupervisorArch } from "../supervisor/supervisor";
import type { HassioResponse } from "./common";
export type AddonCapability = Exclude<keyof TranslationDict["supervisor"]["addon"]["dashboard"]["capability"], "label" | "role" | "stages">;
export type AddonStage = "stable" | "experimental" | "deprecated";
export type AddonAppArmour = "disable" | "default" | "profile";
export type AddonRole = "default" | "homeassistant" | "manager" | "admin";
export type AddonStartup = "initialize" | "system" | "services" | "application" | "once";
export type AddonState = "startup" | "started" | "stopped" | "unknown" | "error" | null;
export type AddonRepository = "core" | "local" | string;
interface AddonFieldTranslation {
    name?: string;
    description?: string;
    fields?: Record<string, AddonFieldTranslation>;
}
interface AddonTranslations {
    network?: Record<string, string>;
    configuration?: Record<string, AddonFieldTranslation>;
}
export interface HassioAddonInfo {
    advanced: boolean;
    available: boolean;
    build: boolean;
    description: string;
    detached: boolean;
    homeassistant: string;
    icon: boolean;
    installed: boolean;
    logo: boolean;
    name: string;
    repository: AddonRepository;
    slug: string;
    stage: AddonStage;
    state: AddonState;
    update_available: boolean;
    url: string | null;
    version_latest: string;
    version: string;
}
export interface HassioAddonDetails extends HassioAddonInfo {
    apparmor: AddonAppArmour;
    arch: SupervisorArch[];
    audio_input: null | string;
    audio_output: null | string;
    audio: boolean;
    auth_api: boolean;
    auto_uart: boolean;
    auto_update: boolean;
    boot: "auto" | "manual";
    changelog: boolean;
    devices: string[];
    devicetree: boolean;
    discovery: string[];
    docker_api: boolean;
    documentation: boolean;
    full_access: boolean;
    gpio: boolean;
    hassio_api: boolean;
    hassio_role: AddonRole;
    hostname: string;
    homeassistant_api: boolean;
    host_dbus: boolean;
    host_ipc: boolean;
    host_network: boolean;
    host_pid: boolean;
    ingress_entry: null | string;
    ingress_panel: boolean;
    ingress_url: null | string;
    ingress: boolean;
    ip_address: string;
    kernel_modules: boolean;
    long_description: null | string;
    machine: any;
    network_description: null | Record<string, string>;
    network: null | Record<string, number>;
    options: Record<string, unknown>;
    privileged: any;
    protected: boolean;
    rating: "1-8";
    schema: HaFormSchema[] | null;
    services_role: string[];
    signed: boolean;
    slug: string;
    startup: AddonStartup;
    stdin: boolean;
    system_managed: boolean;
    system_managed_config_entry: string | null;
    translations: Record<string, AddonTranslations>;
    watchdog: null | boolean;
    webui: null | string;
}
export interface HassioAddonsInfo {
    addons: HassioAddonInfo[];
    repositories: HassioAddonRepository[];
}
export interface HassioAddonSetSecurityParams {
    protected?: boolean;
}
export interface HassioAddonRepository {
    slug: string;
    name: string;
    source: string;
    url: string;
    maintainer: string;
}
export interface HassioAddonSetOptionParams {
    audio_input?: string | null;
    audio_output?: string | null;
    options?: Record<string, unknown> | null;
    boot?: "auto" | "manual";
    auto_update?: boolean;
    ingress_panel?: boolean;
    network?: Record<string, unknown> | null;
    watchdog?: boolean;
}
export declare const reloadHassioAddons: (hass: HomeAssistant) => Promise<void>;
export declare const fetchHassioAddonsInfo: (hass: HomeAssistant) => Promise<HassioAddonsInfo>;
export declare const fetchHassioAddonInfo: (hass: HomeAssistant, slug: string) => Promise<HassioAddonDetails>;
export declare const fetchHassioAddonChangelog: (hass: HomeAssistant, slug: string) => Promise<string>;
export declare const fetchHassioAddonLogs: (hass: HomeAssistant, slug: string) => Promise<string>;
export declare const fetchHassioAddonDocumentation: (hass: HomeAssistant, slug: string) => Promise<string>;
export declare const setHassioAddonOption: (hass: HomeAssistant, slug: string, data: HassioAddonSetOptionParams) => Promise<HassioResponse<any>>;
export declare const validateHassioAddonOption: (hass: HomeAssistant, slug: string, data?: any) => Promise<{
    message: string;
    valid: boolean;
}>;
export declare const startHassioAddon: (hass: HomeAssistant, slug: string) => Promise<unknown>;
export declare const stopHassioAddon: (hass: HomeAssistant, slug: string) => Promise<unknown>;
export declare const setHassioAddonSecurity: (hass: HomeAssistant, slug: string, data: HassioAddonSetSecurityParams) => Promise<void>;
export declare const installHassioAddon: (hass: HomeAssistant, slug: string) => Promise<void>;
export declare const updateHassioAddon: (hass: HomeAssistant, slug: string, backup: boolean) => Promise<void>;
export declare const restartHassioAddon: (hass: HomeAssistant, slug: string) => Promise<void>;
export declare const uninstallHassioAddon: (hass: HomeAssistant, slug: string, removeData: boolean) => Promise<void>;
export declare const fetchAddonInfo: (hass: HomeAssistant, supervisor: Supervisor, addonSlug: string) => Promise<HassioAddonDetails | StoreAddonDetails>;
export declare const rebuildLocalAddon: (hass: HomeAssistant, slug: string) => Promise<void>;
export {};
