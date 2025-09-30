export interface BrandsOptions {
    domain: string;
    type: "icon" | "logo" | "icon@2x" | "logo@2x";
    useFallback?: boolean;
    darkOptimized?: boolean;
    brand?: boolean;
}
export interface HardwareBrandsOptions {
    category: string;
    model?: string;
    manufacturer: string;
    darkOptimized?: boolean;
}
export declare const brandsUrl: (options: BrandsOptions) => string;
export declare const hardwareBrandsUrl: (options: HardwareBrandsOptions) => string;
export declare const extractDomainFromBrandUrl: (url: string) => string;
export declare const isBrandUrl: (thumbnail: string | "") => boolean;
