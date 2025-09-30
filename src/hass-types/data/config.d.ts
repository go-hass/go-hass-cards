import type { HomeAssistant } from "../types";
interface ValidConfig {
    valid: true;
    error: null;
}
interface InvalidConfig {
    valid: false;
    error: string;
}
type ValidKeys = "triggers" | "actions" | "conditions";
export declare const validateConfig: <T extends Partial<Record<ValidKeys, unknown>>>(hass: HomeAssistant, config: T) => Promise<Record<keyof T, ValidConfig | InvalidConfig>>;
export {};
