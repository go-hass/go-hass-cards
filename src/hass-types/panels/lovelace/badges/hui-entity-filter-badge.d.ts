import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceBadge } from "../types";
import "./hui-badge";
import type { EntityFilterBadgeConfig } from "./types";
export declare class HuiEntityFilterBadge extends ReactiveElement implements LovelaceBadge {
    preview: boolean;
    hass: HomeAssistant;
    private _config?;
    private _elements?;
    private _configEntities?;
    private _oldEntities?;
    setConfig(config: EntityFilterBadgeConfig): void;
    protected createRenderRoot(): this;
    protected shouldUpdate(changedProperties: PropertyValues): boolean;
    protected update(changedProperties: PropertyValues): void;
    private _haveEntitiesChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-filter-badge": HuiEntityFilterBadge;
    }
}
