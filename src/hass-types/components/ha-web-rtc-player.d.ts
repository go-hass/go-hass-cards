import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-alert";
/**
 * A WebRTC stream is established by first sending an offer through a signal
 * path via an integration. An answer is returned, then the rest of the stream
 * is handled entirely client side.
 */
declare class HaWebRtcPlayer extends LitElement {
    hass: HomeAssistant;
    entityid?: string;
    aspectRatio?: number;
    fitMode?: "cover" | "contain" | "fill";
    controls: boolean;
    muted: boolean;
    autoPlay: boolean;
    playsInline: boolean;
    posterUrl?: string;
    private _error?;
    private _videoEl;
    private _clientConfig?;
    private _peerConnection?;
    private _remoteStream?;
    private _unsub?;
    private _sessionId?;
    private _candidatesList;
    private _handleVisibilityChange;
    protected render(): TemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _startWebRtc;
    private _startNegotiation;
    private _iceConnectionStateChanged;
    private _handleOfferEvent;
    private _handleIceCandidate;
    private _addTrack;
    private _handleAnswer;
    private _cleanUp;
    private _loadedData;
    private _startTimer;
    private _stopTimer;
    private _logEvent;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-web-rtc-player": HaWebRtcPlayer;
    }
}
export {};
