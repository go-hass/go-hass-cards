import type { HassEntity } from "home-assistant-js-websocket";
export declare const supportsFeature: (stateObj: HassEntity, feature: number) => boolean;
export declare const supportsFeatureFromAttributes: (attributes: Record<string, any>, feature: number) => boolean;
