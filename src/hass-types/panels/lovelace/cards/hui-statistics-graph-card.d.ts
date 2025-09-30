import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { StatisticsGraphCardConfig } from "./types";
export declare const DEFAULT_DAYS_TO_SHOW = 30;
export declare class HuiStatisticsGraphCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../editor/config-elements/hui-statistics-graph-card-editor").HuiStatisticsGraphCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): StatisticsGraphCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _statistics?;
    private _metadata?;
    private _unit?;
    private _entities;
    private _names;
    private _interval?;
    private _statTypes?;
    private _energySub?;
    private _energyStart?;
    private _energyEnd?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    private _subscribeEnergy;
    private _unsubscribeEnergy;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    setConfig(config: StatisticsGraphCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    willUpdate(changedProps: PropertyValues): void;
    private _setFetchStatisticsTimer;
    private get _period();
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private get _intervalTimeout();
    private _getStatisticsMetaData;
    private _getStatistics;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-statistics-graph-card": HuiStatisticsGraphCard;
    }
}
