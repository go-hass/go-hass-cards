import type { Swatch } from "@vibrant/color";
export declare const extractColors: (url: string, downsampleColors?: number) => Promise<{
    background: Swatch;
    foreground: Swatch;
}>;
