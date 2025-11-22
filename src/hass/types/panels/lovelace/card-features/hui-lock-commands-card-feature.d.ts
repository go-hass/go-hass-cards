import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LockCommandsCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsLockCommandsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiLockCommandsCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private get _stateObj();
    static getStubConfig(): LockCommandsCardFeatureConfig;
    setConfig(config: LockCommandsCardFeatureConfig): void;
    private _onTap;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-lock-commands-card-feature": HuiLockCommandsCardFeature;
    }
}
export {};
