import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-svg-icon";
import type { VacuumEntity } from "../../../data/vacuum";
import { VacuumEntityFeature } from "../../../data/vacuum";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, VacuumCommand, VacuumCommandsCardFeatureConfig } from "./types";
interface VacuumButton {
    translationKey: string;
    icon: string;
    serviceName: string;
    disabled?: boolean;
}
export declare const VACUUM_COMMANDS_FEATURES: Record<VacuumCommand, VacuumEntityFeature[]>;
export declare const supportsVacuumCommand: (stateObj: HassEntity, command: VacuumCommand) => boolean;
export declare const VACUUM_COMMANDS_BUTTONS: Record<VacuumCommand, (stateObj: VacuumEntity) => VacuumButton>;
export declare const supportsVacuumCommandsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiVacuumCommandCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private get _stateObj();
    static getStubConfig(hass: HomeAssistant, context: LovelaceCardFeatureContext): VacuumCommandsCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: VacuumCommandsCardFeatureConfig): void;
    private _onCommandTap;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-vacuum-commands-card-feature": HuiVacuumCommandCardFeature;
    }
}
export {};
