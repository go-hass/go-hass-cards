import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LovelaceCardFeatureContext, DateSetCardFeatureConfig } from "./types";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
export declare const supportsDateSetCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => any;
declare class HuiDateSetCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    color?: string;
    private _config?;
    private get _stateObj();
    private _pressButton;
    private _dateChanged;
    static getStubConfig(): DateSetCardFeatureConfig;
    setConfig(config: DateSetCardFeatureConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-date-set-card-feature": HuiDateSetCardFeature;
    }
}
export {};
