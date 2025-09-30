import type { EntityConfig, LovelaceRowConfig } from "../entity-rows/types";
export declare const processConfigEntities: <T extends EntityConfig | LovelaceRowConfig>(entities: (T | string)[], checkEntityId?: boolean) => T[];
