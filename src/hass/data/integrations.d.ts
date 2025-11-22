import type { HomeAssistant } from "../types";
import type { IntegrationType } from "./integration";
export type IotStandards = "zwave" | "zigbee" | "homekit" | "matter";
export interface Integration {
    integration_type: IntegrationType;
    name?: string;
    config_flow?: boolean;
    iot_standards?: IotStandards[];
    iot_class?: string;
    supported_by?: string;
    is_built_in?: boolean;
    overwrites_built_in?: boolean;
    single_config_entry?: boolean;
}
export type Integrations = Record<string, Integration>;
export interface Brand {
    name?: string;
    integrations?: Integrations;
    iot_standards?: IotStandards[];
    is_built_in?: boolean;
    overwrites_built_in?: boolean;
}
export type Brands = Record<string, Integration | Brand>;
export interface IntegrationDescriptions {
    core: {
        integration: Brands;
        helper: Integrations;
        translated_name: string[];
    };
    custom: {
        integration: Brands;
        helper: Integrations;
    };
}
export declare const getIntegrationDescriptions: (hass: HomeAssistant) => Promise<IntegrationDescriptions>;
export declare const findIntegration: (integrations: Brands | undefined, domain: string) => Integration | undefined;
