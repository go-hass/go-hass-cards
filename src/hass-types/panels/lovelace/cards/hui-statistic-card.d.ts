import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-state-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { StatisticCardConfig } from "./types";
export declare const PERIOD_ENERGY = "energy_date_selection";
export declare class HuiStatisticCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): {
        entity: any;
        period: {
            calendar: {
                period: string;
            };
        };
    };
    hass?: HomeAssistant;
    private _config?;
    private _value?;
    private _metadata?;
    private _error?;
    private _energySub?;
    private _energyStart?;
    private _energyEnd?;
    private _interval?;
    private _footerElement?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    private _subscribeEnergy;
    private _unsubscribeEnergy;
    setConfig(config: StatisticCardConfig): void;
    getCardSize(): Promise<number>;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected willUpdate(changedProps: PropertyValues): void;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    private _setFetchStatisticTimer;
    private _fetchStatistic;
    private _fetchMetadata;
    private _handleClick;
    getGridOptions(): LovelaceGridOptions;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-statistic-card": HuiStatisticCard;
    }
}
