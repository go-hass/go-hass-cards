import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-select";
import "../../../components/ha-control-slider";
import type { AlarmMode } from "../../../data/alarm_control_panel";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { AlarmModesCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsAlarmModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiAlarmModeCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    _currentMode?: AlarmMode;
    static getStubConfig(): AlarmModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: AlarmModesCardFeatureConfig): void;
    private get _stateObj();
    protected willUpdate(changedProp: PropertyValues): void;
    private _getCurrentMode;
    private _valueChanged;
    private _disarm;
    private _setMode;
    protected render(): TemplateResult | typeof nothing;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-alarm-modes-card-feature": HuiAlarmModeCardFeature;
    }
}
export {};
