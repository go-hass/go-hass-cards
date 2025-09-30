import type { HomeAssistant, TranslationDict } from "../../types";
export interface HassioResolution {
    unsupported: (keyof TranslationDict["supervisor"]["system"]["supervisor"]["unsupported_reason"])[];
    unhealthy: (keyof TranslationDict["supervisor"]["system"]["supervisor"]["unhealthy_reason"])[];
    issues: string[];
    suggestions: string[];
}
export declare const fetchHassioResolution: (hass: HomeAssistant) => Promise<HassioResolution>;
