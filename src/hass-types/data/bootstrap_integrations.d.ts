import type { HomeAssistant } from "../types";
export type BootstrapIntegrationsTimings = Record<string, number>;
export declare const subscribeBootstrapIntegrations: (hass: HomeAssistant, callback: (message: BootstrapIntegrationsTimings) => void) => Promise<() => Promise<void>>;
