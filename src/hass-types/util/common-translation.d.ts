import type { FrontendLocaleData } from "../data/translation";
/**
 * Search for a matching translation from most specific to general
 */
export declare function findAvailableLanguage(language: string): any;
/**
 * Get user selected locale data from backend
 */
export declare function getUserLocale(data: FrontendLocaleData | null): Promise<Partial<FrontendLocaleData>>;
/**
 * Get browser specific language
 */
export declare function getLocalLanguage(): any;
export declare function getTranslation(fragment: string | null, language: string, fallback?: boolean): Promise<any>;
