import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, UpdateActionsCardFeatureConfig } from "./types";
export declare const DEFAULT_UPDATE_BACKUP_OPTION = "no";
export declare const supportsUpdateActionsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiUpdateActionsCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private get _stateObj();
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    static getStubConfig(): UpdateActionsCardFeatureConfig;
    setConfig(config: UpdateActionsCardFeatureConfig): void;
    private get _installDisabled();
    private get _skipDisabled();
    private _install;
    private _skip;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-update-actions-card-feature": HuiUpdateActionsCardFeature;
    }
}
export {};
