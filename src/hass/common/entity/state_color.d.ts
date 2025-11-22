/** Return a color representing a state. */
import type { HassEntity } from "home-assistant-js-websocket";
export declare const stateColorCss: (stateObj: HassEntity, state?: string) => string;
export declare const domainStateColorProperties: (domain: string, stateObj: HassEntity, state?: string) => string[];
export declare const domainColorProperties: (domain: string, deviceClass: string | undefined, state: string, active: boolean) => string[];
export declare const stateColorProperties: (stateObj: HassEntity, state?: string) => string[] | undefined;
export declare const stateColorBrightness: (stateObj: HassEntity) => string;
