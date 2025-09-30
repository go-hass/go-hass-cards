import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-list-item";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { FanPresetModesCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsFanPresetModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiFanPresetModesCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    _currentPresetMode?: string;
    private _haSelect?;
    private get _stateObj();
    static getStubConfig(): FanPresetModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: FanPresetModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-fan-preset-modes-card-feature": HuiFanPresetModesCardFeature;
    }
}
export {};
