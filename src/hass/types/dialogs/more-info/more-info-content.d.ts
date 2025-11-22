import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../components/ha-badge";
import type { ExtEntityRegistryEntry } from "../../data/entity_registry";
import "../../panels/lovelace/sections/hui-section";
import type { HomeAssistant } from "../../types";
declare class MoreInfoContent extends LitElement {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    data?: Record<string, any>;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _showEntityMembers;
    private _entitiesSectionConfig;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-content": MoreInfoContent;
    }
}
export {};
