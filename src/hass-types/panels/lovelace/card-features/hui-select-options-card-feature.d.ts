import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-list-item";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, SelectOptionsCardFeatureConfig } from "./types";
export declare const supportsSelectOptionsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiSelectOptionsCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    _currentOption?: string;
    private _haSelect;
    private get _stateObj();
    static getStubConfig(): SelectOptionsCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: SelectOptionsCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setOption;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _getOptions;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-select-options-card-feature": HuiSelectOptionsCardFeature;
    }
}
export {};
