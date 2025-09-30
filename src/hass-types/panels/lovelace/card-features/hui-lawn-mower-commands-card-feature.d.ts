import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-svg-icon";
import type { LawnMowerEntity } from "../../../data/lawn_mower";
import { LawnMowerEntityFeature } from "../../../data/lawn_mower";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LawnMowerCommand, LawnMowerCommandsCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
interface LawnMowerButton {
    translationKey: string;
    icon: string;
    serviceName: string;
    disabled?: boolean;
}
export declare const LAWN_MOWER_COMMANDS_FEATURES: Record<LawnMowerCommand, LawnMowerEntityFeature[]>;
export declare const supportsLawnMowerCommand: (stateObj: HassEntity, command: LawnMowerCommand) => boolean;
export declare const LAWN_MOWER_COMMANDS_BUTTONS: Record<LawnMowerCommand, (stateObj: LawnMowerEntity) => LawnMowerButton>;
export declare const supportsLawnMowerCommandCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiLawnMowerCommandCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private get _stateObj();
    static getStubConfig(hass: HomeAssistant, context: LovelaceCardFeatureContext): LawnMowerCommandsCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: LawnMowerCommandsCardFeatureConfig): void;
    private _onCommandTap;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-lawn-mower-commands-card-feature": HuiLawnMowerCommandCardFeature;
    }
}
export {};
