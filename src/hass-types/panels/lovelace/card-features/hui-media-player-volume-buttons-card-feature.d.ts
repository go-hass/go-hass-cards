import { LitElement, nothing } from "lit";
import "../../../components/ha-control-number-buttons";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, MediaPlayerVolumeButtonsCardFeatureConfig } from "./types";
export declare const supportsMediaPlayerVolumeButtonsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiMediaPlayerVolumeButtonsCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private get _stateObj();
    static getStubConfig(): MediaPlayerVolumeButtonsCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: MediaPlayerVolumeButtonsCardFeatureConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-player-volume-buttons-card-feature": HuiMediaPlayerVolumeButtonsCardFeature;
    }
}
export {};
