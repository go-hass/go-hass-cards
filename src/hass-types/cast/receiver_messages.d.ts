import type { Auth } from "home-assistant-js-websocket";
import type { CastManager } from "./cast_manager";
import type { BaseCastMessage } from "./types";
export interface GetStatusMessage extends BaseCastMessage {
    type: "get_status";
    hassUrl?: string;
    hassUUID?: string;
}
export interface ConnectMessage extends BaseCastMessage {
    type: "connect";
    refreshToken: string;
    clientId: string | null;
    hassUrl: string;
    hassUUID?: string;
}
export interface ShowLovelaceViewMessage extends BaseCastMessage {
    type: "show_lovelace_view";
    viewPath: string | number | null;
    urlPath: string | null;
    hassUrl: string;
    hassUUID?: string;
}
export interface ShowDemoMessage extends BaseCastMessage {
    type: "show_demo";
}
export type HassMessage = ShowDemoMessage | GetStatusMessage | ConnectMessage | ShowLovelaceViewMessage;
export declare const castSendAuth: (cast: CastManager, auth: Auth) => void;
export declare const castSendShowLovelaceView: (cast: CastManager, hassUrl: string, viewPath: ShowLovelaceViewMessage["viewPath"], urlPath?: string | null) => void;
export declare const castSendShowDemo: (cast: CastManager) => void;
export declare const ensureConnectedCastSession: (cast: CastManager, auth: Auth) => Promise<void>;
