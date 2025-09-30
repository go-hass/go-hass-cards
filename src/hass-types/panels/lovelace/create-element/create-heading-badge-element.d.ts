import "../heading-badges/hui-entity-heading-badge";
import type { LovelaceHeadingBadgeConfig } from "../heading-badges/types";
export declare const createHeadingBadgeElement: (config: LovelaceHeadingBadgeConfig) => import("../types").LovelaceHeadingBadge;
export declare const getHeadingBadgeElementClass: (type: string) => Promise<import("../types").LovelaceHeadingBadgeConstructor>;
