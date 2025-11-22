import type { HomeAssistant } from "../types";
export interface ApplicationCredentialsDomainConfig {
    description_placeholders: Record<string, string>;
}
export interface ApplicationCredentialsConfig {
    integrations: Record<string, ApplicationCredentialsDomainConfig>;
}
export interface ApplicationCredentialsConfigEntry {
    application_credentials_id?: string;
}
export interface ApplicationCredential {
    id: string;
    domain: string;
    client_id: string;
    client_secret: string;
    name: string;
}
export declare const fetchApplicationCredentialsConfig: (hass: HomeAssistant) => Promise<ApplicationCredentialsConfig>;
export declare const fetchApplicationCredentialsConfigEntry: (hass: HomeAssistant, configEntryId: string) => Promise<ApplicationCredentialsConfigEntry>;
export declare const fetchApplicationCredentials: (hass: HomeAssistant) => Promise<ApplicationCredential[]>;
export declare const createApplicationCredential: (hass: HomeAssistant, domain: string, clientId: string, clientSecret: string, name?: string) => Promise<ApplicationCredential>;
export declare const deleteApplicationCredential: (hass: HomeAssistant, applicationCredentialsId: string) => Promise<undefined>;
