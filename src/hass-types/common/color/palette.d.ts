/**
 * Normalizes the luminance of a given color to ensure it falls within the specified minimum and maximum luminance range.
 * This helps to keep everything readable and accessible, especially for text and UI elements.
 *
 * This function converts the input color to the OKLCH color space, calculates its luminance,
 * and adjusts the lightness component if the luminance is outside the allowed range.
 * The adjustment is performed using a binary search to find the appropriate lightness value.
 * If the color is already within the range, it is returned unchanged.
 *
 * @param color - css color string
 * @returns The normalized color as a hex string, or the original color if normalization is not needed.
 * @throws If the provided color is invalid or cannot be parsed.
 */
export declare const normalizeLuminance: (color: string) => string;
/**
 * Generates a color palette based on a base color using the OKLCH color space.
 *
 * The palette consists of multiple shades, both lighter and darker than the base color,
 * calculated by adjusting the lightness and chroma values. Each shade is labeled and
 * returned as a tuple containing the shade name and its hexadecimal color value.
 *
 * @param baseColor - The base color in a HEX format.
 * @param label - A string label used to name each color variant in the palette.
 * @param steps - An array of numbers representing the percentage steps for generating shades (default: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95]).
 * @returns An array of tuples, each containing the shade name and its corresponding hex color value.
 * @throws If the provided base color is invalid or cannot be parsed by the `oklch` function.
 */
export declare const generateColorPalette: (baseColor: string, label: string, steps?: number[]) => string[][];
