import { LitElement, nothing, type PropertyValues } from "lit";
import { type CameraEntity } from "../data/camera";
import type { HomeAssistant } from "../types";
import "./ha-hls-player";
import "./ha-web-rtc-player";
export declare class HaCameraStream extends LitElement {
    hass?: HomeAssistant;
    stateObj?: CameraEntity;
    aspectRatio?: number;
    fitMode?: "cover" | "contain" | "fill";
    controls: boolean;
    muted: boolean;
    allowExoPlayer: boolean;
    private _posterUrl?;
    private _connected;
    private _capabilities?;
    private _hlsStreams?;
    private _webRtcStreams?;
    willUpdate(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderStream;
    private _getCapabilities;
    private _getPosterUrl;
    private _handleHlsStreams;
    private _handleWebRtcStreams;
    private _streams;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-camera-stream": HaCameraStream;
    }
    interface HASSDomEvents {
        load: undefined;
        streams: {
            hasAudio: boolean;
            hasVideo: boolean;
            codecs?: string[];
        };
    }
}
