import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard } from "../types";
import type { EntityFilterCardConfig } from "./types";
export declare class HuiEntityFilterCard extends ReactiveElement implements LovelaceCard {
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): EntityFilterCardConfig;
    hass?: HomeAssistant;
    layout?: string;
    preview: boolean;
    private _config?;
    private _element?;
    private _configEntities?;
    private _baseCardConfig?;
    private _oldEntities?;
    getCardSize(): number | Promise<number>;
    setConfig(config: EntityFilterCardConfig): void;
    protected createRenderRoot(): this;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected update(changedProps: PropertyValues): void;
    private _haveEntitiesChanged;
    private _createCardElement;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-filter-card": HuiEntityFilterCard;
    }
}
