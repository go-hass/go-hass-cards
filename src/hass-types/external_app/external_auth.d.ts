/**
 * Auth class that connects to a native app for authentication.
 */
import { Auth } from "home-assistant-js-websocket";
import type { EMMessage } from "./external_messaging";
import { ExternalMessaging } from "./external_messaging";
interface BasePayload {
    callback: string;
}
interface GetExternalAuthPayload extends BasePayload {
    force?: boolean;
}
declare global {
    interface Window {
        externalApp?: {
            getExternalAuth(payload: string): any;
            revokeExternalAuth(payload: string): any;
            externalBus(payload: string): any;
        };
        webkit?: {
            messageHandlers: {
                getExternalAuth: {
                    postMessage(payload: GetExternalAuthPayload): any;
                };
                revokeExternalAuth: {
                    postMessage(payload: BasePayload): any;
                };
                externalBus: {
                    postMessage(payload: EMMessage): any;
                };
            };
        };
    }
}
export declare class ExternalAuth extends Auth {
    external?: ExternalMessaging;
    constructor(hassUrl: string);
    private _tokenCallbackPromise?;
    refreshAccessToken(force?: boolean): Promise<void>;
    revoke(): Promise<void>;
}
export declare const createExternalAuth: (hassUrl: string) => Promise<ExternalAuth>;
export {};
