import type { Connection } from "home-assistant-js-websocket";
import type { FlattenObjectKeys, LocalizeFunc } from "../../common/translations/localize";
import type { TranslationDict } from "../../types";
import type { HassioAddonsInfo } from "../hassio/addon";
import type { HassioHassOSInfo, HassioHostInfo } from "../hassio/host";
import type { NetworkInfo } from "../hassio/network";
import type { HassioResolution } from "../hassio/resolution";
import type { HassioHomeAssistantInfo, HassioInfo, HassioSupervisorInfo } from "../hassio/supervisor";
import type { SupervisorStore } from "./store";
export declare const supervisorWSbaseCommand: {
    type: string;
    method: string;
};
export declare const supervisorCollection: {
    host: string;
    supervisor: string;
    info: string;
    core: string;
    network: string;
    resolution: string;
    os: string;
    addon: string;
    store: string;
};
export type SupervisorArch = "armhf" | "armv7" | "aarch64" | "i386" | "amd64";
export type SupervisorObject = "host" | "supervisor" | "info" | "core" | "network" | "resolution" | "os" | "addon" | "store";
interface SupervisorApiRequest {
    endpoint: string;
    method?: "get" | "post" | "delete" | "put";
    force_rest?: boolean;
    data?: any;
    timeout?: number | null;
}
export interface SupervisorEvent {
    event: string;
    update_key?: SupervisorObject;
    data?: any;
    [key: string]: any;
}
export type SupervisorKeys = FlattenObjectKeys<TranslationDict["supervisor"]>;
export interface Supervisor {
    host: HassioHostInfo;
    supervisor: HassioSupervisorInfo;
    info: HassioInfo;
    core: HassioHomeAssistantInfo;
    network: NetworkInfo;
    resolution: HassioResolution;
    os: HassioHassOSInfo;
    addon: HassioAddonsInfo;
    store: SupervisorStore;
    localize: LocalizeFunc<SupervisorKeys>;
}
export declare const supervisorApiWsRequest: <T>(conn: Connection, request: SupervisorApiRequest) => Promise<T>;
export declare const getSupervisorEventCollection: (conn: Connection, key: string, endpoint: string) => import("home-assistant-js-websocket").Collection<unknown>;
export declare const cleanupSupervisorCollection: (conn: Connection, key: string) => boolean;
export {};
