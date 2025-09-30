import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/chips/ha-assist-chip";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-state-icon";
import "../../../components/ha-textfield";
import type { AlarmMode } from "../../../data/alarm_control_panel";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard } from "../types";
import type { AlarmPanelCardConfig, AlarmPanelCardConfigState } from "./types";
export declare const DEFAULT_STATES: AlarmPanelCardConfigState[];
export declare const ALARM_MODE_STATE_MAP: Record<AlarmPanelCardConfigState, AlarmMode>;
export declare const filterSupportedAlarmStates: (stateObj: HassEntity | undefined, states: AlarmPanelCardConfigState[]) => AlarmPanelCardConfigState[];
declare class HuiAlarmPanelCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../editor/config-elements/hui-alarm-panel-card-editor").HuiAlarmPanelCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): AlarmPanelCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _entry?;
    private _value?;
    private _unsubEntityRegistry?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    getCardSize(): Promise<number>;
    setConfig(config: AlarmPanelCardConfig): void;
    protected updated(changedProps: PropertyValues): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    private _unsubscribeEntityRegistry;
    private _subscribeEntityEntry;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _actionDisplay;
    private _stateDisplay;
    private _handleInput;
    private _handlePadClick;
    private _handleActionClick;
    private _handleMoreInfo;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-alarm-panel-card": HuiAlarmPanelCard;
    }
}
export {};
