import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-list-item";
import type { HvacMode } from "../../../data/climate";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { ClimateHvacModesCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsClimateHvacModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiClimateHvacModesCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    _currentHvacMode?: HvacMode;
    private _haSelect?;
    private get _stateObj();
    static getStubConfig(): ClimateHvacModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: ClimateHvacModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-hvac-modes-card-feature": HuiClimateHvacModesCardFeature;
    }
}
export {};
