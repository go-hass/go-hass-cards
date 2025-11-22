import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import type { RelatedResult } from "../data/search";
import type { HomeAssistant } from "../types";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-list";
import "./search-input-outlined";
export declare class HaFilterDevices extends LitElement {
    hass: HomeAssistant;
    value?: string[];
    type?: keyof RelatedResult;
    expanded: boolean;
    narrow: boolean;
    private _shouldRender;
    private _filter?;
    willUpdate(properties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _keyFunction;
    private _renderItem;
    private _handleItemClick;
    protected updated(changed: any): void;
    private _expandedWillChange;
    private _expandedChanged;
    private _handleSearchChange;
    private _devices;
    private _findRelated;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-devices": HaFilterDevices;
    }
}
