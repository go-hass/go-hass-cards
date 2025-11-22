import type { HassEntity } from "home-assistant-js-websocket";
export declare const computeStateNameFromEntityAttributes: (entityId: string, attributes: Record<string, any>) => string;
export declare const computeStateName: (stateObj: HassEntity) => string;
