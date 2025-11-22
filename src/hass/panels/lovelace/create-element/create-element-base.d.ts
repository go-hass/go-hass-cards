import type { LovelaceSectionElement, LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { LovelaceCardFeatureConfig } from "../card-features/types";
import type { ErrorCardConfig } from "../cards/types";
import type { LovelaceElement, LovelaceElementConfig } from "../elements/types";
import type { LovelaceRow, LovelaceRowConfig } from "../entity-rows/types";
import type { LovelaceHeaderFooterConfig } from "../header-footer/types";
import type { ErrorBadgeConfig as ErrorHeadingBadgeConfig, LovelaceHeadingBadgeConfig } from "../heading-badges/types";
import type { LovelaceBadge, LovelaceBadgeConstructor, LovelaceCard, LovelaceCardConstructor, LovelaceCardFeature, LovelaceCardFeatureConstructor, LovelaceElementConstructor, LovelaceHeaderFooter, LovelaceHeaderFooterConstructor, LovelaceHeadingBadge, LovelaceHeadingBadgeConstructor, LovelaceRowConstructor } from "../types";
import type { ErrorBadgeConfig } from "../badges/types";
interface CreateElementConfigTypes {
    card: {
        config: LovelaceCardConfig;
        element: LovelaceCard;
        constructor: LovelaceCardConstructor;
    };
    badge: {
        config: LovelaceBadgeConfig;
        element: LovelaceBadge;
        constructor: LovelaceBadgeConstructor;
    };
    element: {
        config: LovelaceElementConfig;
        element: LovelaceElement;
        constructor: LovelaceElementConstructor;
    };
    row: {
        config: LovelaceRowConfig;
        element: LovelaceRow;
        constructor: LovelaceRowConstructor;
    };
    "header-footer": {
        config: LovelaceHeaderFooterConfig;
        element: LovelaceHeaderFooter;
        constructor: LovelaceHeaderFooterConstructor;
    };
    view: {
        config: LovelaceViewConfig;
        element: LovelaceViewElement;
        constructor: unknown;
    };
    "card-feature": {
        config: LovelaceCardFeatureConfig;
        element: LovelaceCardFeature;
        constructor: LovelaceCardFeatureConstructor;
    };
    section: {
        config: LovelaceSectionConfig;
        element: LovelaceSectionElement;
        constructor: unknown;
    };
    "heading-badge": {
        config: LovelaceHeadingBadgeConfig;
        element: LovelaceHeadingBadge;
        constructor: LovelaceHeadingBadgeConstructor;
    };
}
export declare const createErrorCardElement: (config: ErrorCardConfig) => import("../cards/hui-error-card").HuiErrorCard;
export declare const createErrorBadgeElement: (config: ErrorBadgeConfig) => import("../badges/hui-error-badge").HuiErrorBadge;
export declare const createErrorHeadingBadgeElement: (config: ErrorHeadingBadgeConfig) => import("../heading-badges/hui-error-heading-badge").HuiErrorHeadingBadge;
export declare const createErrorBadgeConfig: (error: any, origConfig: any) => {
    type: string;
    error: any;
    origConfig: any;
};
export declare const createErrorHeadingBadgeConfig: (error: any, origConfig: any) => {
    type: string;
    error: any;
    origConfig: any;
};
export declare const createLovelaceElement: <T extends keyof CreateElementConfigTypes>(tagSuffix: T, config: CreateElementConfigTypes[T]["config"], alwaysLoadTypes?: Set<string>, lazyLoadTypes?: Record<string, () => Promise<unknown>>, domainTypes?: {
    _domain_not_found: string;
    [domain: string]: string;
}, defaultType?: string) => CreateElementConfigTypes[T]["element"];
export declare const tryCreateLovelaceElement: <T extends keyof CreateElementConfigTypes>(tagSuffix: T, config: CreateElementConfigTypes[T]["config"], alwaysLoadTypes?: Set<string>, lazyLoadTypes?: Record<string, () => Promise<unknown>>, domainTypes?: {
    _domain_not_found: string;
    [domain: string]: string;
}, defaultType?: string) => CreateElementConfigTypes[T]["element"];
export declare const getLovelaceElementClass: <T extends keyof CreateElementConfigTypes>(type: string, tagSuffix: T, alwaysLoadTypes?: Set<string>, lazyLoadTypes?: Record<string, () => Promise<unknown>>) => Promise<CreateElementConfigTypes[T]["constructor"]>;
export {};
