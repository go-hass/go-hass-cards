import type { Auth } from "home-assistant-js-websocket";
import type { HassMessage as ReceiverMessage } from "./receiver_messages";
import type { ReceiverStatusMessage } from "./sender_messages";
type CastEventListener = () => void;
type CastEvent = "connection-changed" | "state-changed";
export declare class CastManager {
    auth?: Auth;
    status?: ReceiverStatusMessage;
    private _eventListeners;
    constructor(auth?: Auth);
    addEventListener(event: CastEvent, listener: CastEventListener): () => void;
    get castConnectedToOurHass(): boolean;
    sendMessage(msg: ReceiverMessage): void;
    get castState(): any;
    get castContext(): any;
    get castSession(): any;
    requestSession(): any;
    private _fireEvent;
    private _receiveMessage;
    private _sessionStateChanged;
    private _castStateChanged;
    private _attachMessageListener;
}
export declare const getCastManager: (auth?: Auth) => Promise<CastManager>;
export {};
