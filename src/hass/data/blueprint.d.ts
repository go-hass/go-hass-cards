import type { HomeAssistant } from "../types";
import type { ManualAutomationConfig } from "./automation";
import type { ManualScriptConfig } from "./script";
import type { Selector } from "./selector";
export type BlueprintDomain = "automation" | "script";
export type Blueprints = Record<string, BlueprintOrError>;
export type BlueprintOrError = Blueprint | {
    error: string;
};
export interface Blueprint {
    metadata: BlueprintMetaData;
}
export interface BlueprintMetaData {
    domain: BlueprintDomain;
    name: string;
    input?: Record<string, BlueprintInput | BlueprintInputSection | null>;
    description?: string;
    source_url?: string;
    author?: string;
}
export interface BlueprintInput {
    name?: string;
    description?: string;
    selector?: Selector;
    default?: any;
}
export interface BlueprintInputSection {
    name?: string;
    icon?: string;
    description?: string;
    collapsed?: boolean;
    input: Record<string, BlueprintInput | null>;
}
export interface BlueprintImportResult {
    suggested_filename: string;
    raw_data: string;
    exists?: boolean;
    blueprint: Blueprint;
    validation_errors: string[] | null;
}
export interface BlueprintSubstituteResults {
    automation: {
        substituted_config: ManualAutomationConfig;
    };
    script: {
        substituted_config: ManualScriptConfig;
    };
}
export declare const fetchBlueprints: (hass: HomeAssistant, domain: BlueprintDomain) => Promise<Blueprints>;
export declare const importBlueprint: (hass: HomeAssistant, url: string) => Promise<BlueprintImportResult>;
export declare const saveBlueprint: (hass: HomeAssistant, domain: BlueprintDomain, path: string, yaml: string, source_url?: string, allow_override?: boolean) => Promise<unknown>;
export declare const deleteBlueprint: (hass: HomeAssistant, domain: BlueprintDomain, path: string) => Promise<BlueprintImportResult>;
export type BlueprintSourceType = "local" | "community" | "homeassistant";
export declare const getBlueprintSourceType: (blueprint: Blueprint) => BlueprintSourceType;
export declare const substituteBlueprint: <T extends BlueprintDomain = BlueprintDomain>(hass: HomeAssistant, domain: T, path: string, input: Record<string, any>) => Promise<BlueprintSubstituteResults[T]>;
