import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { ItemType } from "../data/search";
import type { HomeAssistant } from "../types";
import "./ha-icon-next";
import "./ha-list-item";
import "./ha-state-icon";
import "./ha-switch";
import "./ha-list";
export declare class HaRelatedItems extends LitElement {
    hass: HomeAssistant;
    itemType: ItemType;
    itemId: string;
    private _entries?;
    private _blueprints?;
    private _related?;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _fetchConfigEntries;
    private _fetchBlueprints;
    protected updated(changedProps: PropertyValues): void;
    private _relatedEntities;
    private _relatedAutomations;
    private _relatedScripts;
    private _relatedGroups;
    private _relatedScenes;
    private _toEntities;
    private _getConfigEntries;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _findRelated;
    private _openMoreInfo;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-related-items": HaRelatedItems;
    }
}
