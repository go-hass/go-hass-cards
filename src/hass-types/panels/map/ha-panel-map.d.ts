import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-icon-button";
import "../../components/ha-menu-button";
import "../../components/ha-top-app-bar-fixed";
import "../../components/map/ha-map";
import type { HomeAssistant } from "../../types";
declare class HaPanelMap extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _entities;
    protected render(): import("lit-html").TemplateResult<1>;
    private _openZonesEditor;
    willUpdate(changedProps: PropertyValues): void;
    private _getStates;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-map": HaPanelMap;
    }
}
export {};
