import type { HassConfig } from "home-assistant-js-websocket";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { LocalizeFunc } from "../../../common/translations/localize";
import "../../../components/ha-card";
import "../../../components/ha-ripple";
import type { EntityRegistryDisplayEntry } from "../../../data/entity_registry";
import type { FrontendLocaleData } from "../../../data/translation";
import type { Themes } from "../../../data/ws-themes";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { ButtonCardConfig } from "./types";
export declare const getEntityDefaultButtonAction: (entityId?: string) => "toggle" | "more-info";
export declare class HuiButtonCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): ButtonCardConfig;
    hass: HomeAssistant;
    private _config?;
    private _stateObj?;
    _themes: Themes;
    _localize: LocalizeFunc;
    _locale: FrontendLocaleData;
    _hassConfig: HassConfig;
    _entity?: EntityRegistryDisplayEntry;
    private _getStateColor;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    setConfig(config: ButtonCardConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected updated(changedProps: PropertyValues): void;
    static get styles(): CSSResultGroup;
    private _computeColor;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-card": HuiButtonCard;
    }
}
