import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import type { FanDirection } from "../../../data/fan";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { FanDirectionCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsFanDirectionCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiFanDirectionCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    _currentDirection?: FanDirection;
    private get _stateObj();
    static getStubConfig(): FanDirectionCardFeatureConfig;
    setConfig(config: FanDirectionCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _valueChanged;
    private _setDirection;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-fan-direction-card-feature": HuiFanDirectionCardFeature;
    }
}
export {};
