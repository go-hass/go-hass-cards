import type { LovelaceRowConfig } from "../entity-rows/types";
interface BaseEntityConfig {
    type: string;
    entity: string;
}
export declare const processConfigEntities: <T extends BaseEntityConfig | LovelaceRowConfig>(entities: (T | string)[], checkEntityId?: boolean) => T[];
export {};
