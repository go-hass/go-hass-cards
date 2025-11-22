import type { LovelaceHeaderFooterConfig } from "../header-footer/types";
export declare const createHeaderFooterElement: (config: LovelaceHeaderFooterConfig) => import("../types").LovelaceHeaderFooter;
export declare const getHeaderFooterElementClass: (type: string) => Promise<import("../types").LovelaceHeaderFooterConstructor>;
