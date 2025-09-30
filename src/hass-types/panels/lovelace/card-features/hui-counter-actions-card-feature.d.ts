import type { HassEntity } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-select";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { type CounterActionsCardFeatureConfig, type LovelaceCardFeatureContext } from "./types";
export declare const supportsCounterActionsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
interface CounterButton {
    translationKey: string;
    icon: string;
    serviceName: string;
    disabled: boolean;
}
export declare const COUNTER_ACTIONS_BUTTON: Record<string, (stateObj: HassEntity) => CounterButton>;
declare class HuiCounterActionsCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private get _stateObj();
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    static getStubConfig(): CounterActionsCardFeatureConfig;
    setConfig(config: CounterActionsCardFeatureConfig): void;
    protected render(): TemplateResult | null;
    private _onActionTap;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-counter-actions-card-feature": HuiCounterActionsCardFeature;
    }
}
export {};
