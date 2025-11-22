import type { CSSResult } from "lit";
/**
 * Extracts the value of a CSS custom property (CSS variable) from a given CSSResult object.
 *
 * @param css - The CSSResult object containing the CSS string to search.
 * @param varName - The name of the CSS variable (without the leading '--') to extract.
 * @param baseVars - (Optional) A record of base variable names and their values, used to resolve variables that reference other variables via `var()`.
 * @returns The value of the CSS variable if found, otherwise an empty string. If the variable references another variable and `baseVars` is provided, attempts to resolve it from `baseVars`.
 */
export declare const extractVar: (css: CSSResult, varName: string, baseVars?: Record<string, string>) => any;
export declare const extractVars: (css: CSSResult) => Record<string, string>;
export declare const extractDerivedVars: (css: CSSResult) => Record<string, string>;
