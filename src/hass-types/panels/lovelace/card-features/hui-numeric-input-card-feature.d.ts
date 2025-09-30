import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-number-buttons";
import "../../../components/ha-control-slider";
import "../../../components/ha-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, NumericInputCardFeatureConfig } from "./types";
export declare const supportsNumericInputCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiNumericInputCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    _currentState?: string;
    static getStubConfig(): NumericInputCardFeatureConfig;
    private get _stateObj();
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: NumericInputCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _setValue;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-numeric-input-card-feature": HuiNumericInputCardFeature;
    }
}
export {};
