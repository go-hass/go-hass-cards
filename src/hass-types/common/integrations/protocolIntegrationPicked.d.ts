import type { HomeAssistant } from "../../types";
export declare const PROTOCOL_INTEGRATIONS: readonly ["zha", "zwave_js", "matter"];
export declare const protocolIntegrationPicked: (element: HTMLElement, hass: HomeAssistant, domain: string, options?: {
    brand?: string;
    domain?: string;
    config_entry?: string;
}) => Promise<void>;
