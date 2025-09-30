import type { HassEntity } from "home-assistant-js-websocket";
export declare const batteryIcon: (stateObj: HassEntity, state?: string) => string;
export declare const batteryLevelIcon: (batteryLevel: number | string, isBatteryCharging?: boolean) => string;
