import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-number-buttons";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LovelaceCardFeatureContext, TargetTemperatureCardFeatureConfig } from "./types";
export declare const supportsTargetTemperatureCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiTargetTemperatureCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private _targetTemperature;
    private get _stateObj();
    static getStubConfig(): TargetTemperatureCardFeatureConfig;
    setConfig(config: TargetTemperatureCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private get _step();
    private get _min();
    private get _max();
    private _valueChanged;
    private _debouncedCallService;
    private _callService;
    private _supportsTarget;
    private _supportsTargetRange;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-target-temperature-card-feature": HuiTargetTemperatureCardFeature;
    }
}
export {};
