import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-alert";
declare class HaHLSPlayer extends LitElement {
    hass: HomeAssistant;
    entityid?: string;
    url?: string;
    posterUrl?: string;
    aspectRatio?: number;
    fitMode?: "cover" | "contain" | "fill";
    controls: boolean;
    muted: boolean;
    autoPlay: boolean;
    playsInline: boolean;
    allowExoPlayer: boolean;
    private _videoEl;
    private _error?;
    private _errorIsFatal;
    private _url;
    private _hlsPolyfillInstance?;
    private _exoPlayer;
    private static streamCount;
    private _handleVisibilityChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    protected updated(changedProps: PropertyValues): void;
    private _getStreamUrlFromEntityId;
    private _startHls;
    private _renderHLSExoPlayer;
    private _resizeExoPlayer;
    private _isLLHLSSupported;
    private _renderHLSPolyfill;
    private _renderHLSNative;
    private _cleanUp;
    private _resetError;
    private _setFatalError;
    private _setRetryableError;
    private _reportStreams;
    private _loadedData;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-hls-player": HaHLSPlayer;
    }
}
export {};
