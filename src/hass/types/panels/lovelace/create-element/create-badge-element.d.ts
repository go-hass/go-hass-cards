import type { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import "../badges/hui-entity-badge";
export declare const tryCreateBadgeElement: (config: LovelaceBadgeConfig) => import("../types").LovelaceBadge;
export declare const createBadgeElement: (config: LovelaceBadgeConfig) => import("../types").LovelaceBadge;
export declare const getBadgeElementClass: (type: string) => Promise<import("../types").LovelaceBadgeConstructor>;
