import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-attribute-value";
import "./ha-expansion-panel";
declare class HaAttributes extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    extraFilters?: string;
    private _expanded;
    private get _filteredAttributes();
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
    private _computeDisplayAttributes;
    private _expandedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-attributes": HaAttributes;
    }
}
export {};
