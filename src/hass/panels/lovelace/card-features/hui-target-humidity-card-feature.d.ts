import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LovelaceCardFeatureContext, TargetHumidityCardFeatureConfig } from "./types";
export declare const supportsTargetHumidityCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiTargetHumidityCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private _targetHumidity?;
    private get _stateObj();
    static getStubConfig(): TargetHumidityCardFeatureConfig;
    setConfig(config: TargetHumidityCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _step;
    private get _min();
    private get _max();
    private _valueChanged;
    private _callService;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-target-humidity-card-feature": HuiTargetHumidityCardFeature;
    }
}
export {};
