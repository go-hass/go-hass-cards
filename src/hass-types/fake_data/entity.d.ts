import type { HassEntity, HassEntityAttributeBase } from "home-assistant-js-websocket";
export declare class Entity {
    domain: string;
    objectId: string;
    entityId: string;
    lastChanged: string;
    lastUpdated: string;
    state: string;
    baseAttributes: HassEntityAttributeBase & Record<string, any>;
    attributes: HassEntityAttributeBase & Record<string, any>;
    hass?: any;
    static CAPABILITY_ATTRIBUTES: Set<string>;
    constructor(domain: any, objectId: any, state: any, attributes: any);
    handleService(domain: any, service: any, data: Record<string, any>): Promise<void>;
    update(state: any, attributes?: {}): void;
    toState(): {
        entity_id: string;
        state: string;
        attributes: HassEntityAttributeBase & Record<string, any>;
        last_changed: string;
        last_updated: string;
    };
}
export declare const getEntity: (domain: any, objectId: any, state: any, baseAttributes?: {}) => Entity;
type LimitedEntity = Pick<HassEntity, "state" | "attributes" | "entity_id">;
export declare const convertEntities: (states: Record<string, LimitedEntity>) => Entity[];
export {};
