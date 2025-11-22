import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LovelaceCardFeatureContext, MediaPlayerPlaybackCardFeatureConfig } from "./types";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-button";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon";
export declare const supportsMediaPlayerPlaybackCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiMediaPlayerPlaybackCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    color?: string;
    private _config?;
    private _narrow?;
    private get _stateObj();
    static getStubConfig(): MediaPlayerPlaybackCardFeatureConfig;
    setConfig(config: MediaPlayerPlaybackCardFeatureConfig): void;
    willUpdate(): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _measureCard;
    private _computeControlButton;
    private _computeButtons;
    private _togglePower;
    private _action;
    private _playPauseStop;
    private _play;
    private _pause;
    private _stop;
    private _previousTrack;
    private _nextTrack;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-player-playback-card-feature": HuiMediaPlayerPlaybackCardFeature;
    }
}
export {};
