/**
 * Calculates the luminosity of an RGB color.
 * @param rgb - The RGB color to calculate the luminosity of.
 * @returns The luminosity of the color.
 */
export declare const luminosity: (rgb: [number, number, number]) => number;
/**
 * Calculates the contrast ratio between two RGB colors.
 * @param color1 - The first color to calculate the contrast ratio of.
 * @param color2 - The second color to calculate the contrast ratio of.
 * @returns The contrast ratio between the two colors.
 */
export declare const rgbContrast: (color1: [number, number, number], color2: [number, number, number]) => number;
/**
 * Calculates the contrast ratio between two RGB colors.
 * @param rgb1 - The first color to calculate the contrast ratio of.
 * @param rgb2 - The second color to calculate the contrast ratio of.
 * @returns The contrast ratio between the two colors.
 */
export declare const getRGBContrastRatio: (rgb1: [number, number, number], rgb2: [number, number, number]) => number;
