/**
 * Expands a 3-digit hex color to a 6-digit hex color.
 * @param hex - The hex color to expand.
 * @returns The expanded hex color.
 * @throws If the hex color is invalid.
 */
export declare const expandHex: (hex: string) => string;
/**
 * Blends two hex colors. c1 is placed over c2, blend is c1's opacity.
 * @param c1 - The first hex color.
 * @param c2 - The second hex color.
 * @param blend - The blend percentage (0-100).
 * @returns The blended hex color.
 */
export declare const hexBlend: (c1: string, c2: string, blend?: number) => string;
