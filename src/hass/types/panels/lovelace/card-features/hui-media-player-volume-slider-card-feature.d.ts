import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LovelaceCardFeatureContext, MediaPlayerVolumeSliderCardFeatureConfig } from "./types";
export declare const supportsMediaPlayerVolumeSliderCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiMediaPlayerVolumeSliderCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private get _stateObj();
    static getStubConfig(): MediaPlayerVolumeSliderCardFeatureConfig;
    setConfig(config: MediaPlayerVolumeSliderCardFeatureConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-player-volume-slider-card-feature": HuiMediaPlayerVolumeSliderCardFeature;
    }
}
export {};
