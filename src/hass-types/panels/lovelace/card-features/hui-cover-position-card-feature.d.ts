import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { CoverPositionCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsCoverPositionCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiCoverPositionCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    color?: string;
    private _config?;
    private get _stateObj();
    static getStubConfig(): CoverPositionCardFeatureConfig;
    setConfig(config: CoverPositionCardFeatureConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-position-card-feature": HuiCoverPositionCardFeature;
    }
}
export {};
