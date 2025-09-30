import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import "../components/hui-entities-toggle";
import type { EntityConfig, LovelaceRowConfig } from "../entity-rows/types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { EntitiesCardConfig } from "./types";
export declare const computeShowHeaderToggle: <T extends EntityConfig | LovelaceRowConfig>(config: EntitiesCardConfig, entities: T[]) => boolean;
declare class HuiEntitiesCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): EntitiesCardConfig;
    private _config?;
    private _hass?;
    private _configEntities?;
    private _showHeaderToggle?;
    private _headerElement?;
    private _footerElement?;
    set hass(hass: HomeAssistant);
    getCardSize(): Promise<number>;
    setConfig(config: EntitiesCardConfig): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    private _renderEntity;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entities-card": HuiEntitiesCard;
    }
}
export {};
