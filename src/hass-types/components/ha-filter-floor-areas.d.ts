import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import type { RelatedResult } from "../data/search";
import type { HomeAssistant } from "../types";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-floor-icon";
import "./ha-icon";
import "./ha-icon-button";
import "./ha-list";
import "./ha-svg-icon";
import "./ha-tree-indicator";
export declare class HaFilterFloorAreas extends LitElement {
    hass: HomeAssistant;
    value?: {
        floors?: string[];
        areas?: string[];
    };
    type?: keyof RelatedResult;
    narrow: boolean;
    expanded: boolean;
    private _shouldRender;
    willUpdate(properties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderArea;
    private _handleItemClick;
    protected updated(changed: any): void;
    private _expandedWillChange;
    private _expandedChanged;
    private _areas;
    private _findRelated;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-floor-areas": HaFilterFloorAreas;
    }
    interface HASSDomEvents {
        "data-table-filter-changed": {
            value: any;
            items: Set<string> | undefined;
        };
    }
}
