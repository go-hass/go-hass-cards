import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-control-select";
import type { HumidifierState } from "../../../data/humidifier";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { HumidifierToggleCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsHumidifierToggleCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiHumidifierToggleCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    _currentState?: HumidifierState;
    private get _stateObj();
    static getStubConfig(): HumidifierToggleCardFeatureConfig;
    setConfig(config: HumidifierToggleCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _valueChanged;
    private _setState;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-toggle-card-feature": HuiHumidifierToggleCardFeature;
    }
}
export {};
