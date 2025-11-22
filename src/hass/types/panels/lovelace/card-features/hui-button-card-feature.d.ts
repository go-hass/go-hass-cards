import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { ButtonCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsButtonCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiButtonCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private get _stateObj();
    private _pressButton;
    static getStubConfig(): ButtonCardFeatureConfig;
    setConfig(config: ButtonCardFeatureConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-card-feature": HuiButtonCardFeature;
    }
}
export {};
