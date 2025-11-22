import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import type { RelatedResult } from "../data/search";
import type { HomeAssistant } from "../types";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-list";
import "./ha-state-icon";
import "./search-input-outlined";
export declare class HaFilterEntities extends LitElement {
    hass: HomeAssistant;
    value?: string[];
    type?: keyof RelatedResult;
    narrow: boolean;
    expanded: boolean;
    private _shouldRender;
    private _filter?;
    willUpdate(properties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changed: any): void;
    private _keyFunction;
    private _renderItem;
    private _handleItemClick;
    private _expandedWillChange;
    private _expandedChanged;
    private _handleSearchChange;
    private _entities;
    private _findRelated;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-entities": HaFilterEntities;
    }
}
