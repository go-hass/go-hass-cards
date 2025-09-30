import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-icon-button";
import "./ha-list";
export declare class HaFilterBlueprints extends LitElement {
    hass: HomeAssistant;
    value?: string[];
    type?: "automation" | "script";
    narrow: boolean;
    expanded: boolean;
    private _shouldRender;
    private _blueprints?;
    willUpdate(properties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(): Promise<void>;
    protected updated(changed: any): void;
    private _expandedWillChange;
    private _expandedChanged;
    private _blueprintsSelected;
    private _findRelated;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-blueprints": HaFilterBlueprints;
    }
}
