import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { ValveOpenCloseCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
import "../../../components/ha-control-switch";
export declare const supportsValveOpenCloseCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiValveOpenCloseCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private get _stateObj();
    static getStubConfig(): ValveOpenCloseCardFeatureConfig;
    setConfig(config: ValveOpenCloseCardFeatureConfig): void;
    private _onOpenValve;
    private _onCloseValve;
    private _onOpenTap;
    private _onCloseTap;
    private _onStopTap;
    private _valueChanged;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-valve-open-close-card-feature": HuiValveOpenCloseCardFeature;
    }
}
export {};
