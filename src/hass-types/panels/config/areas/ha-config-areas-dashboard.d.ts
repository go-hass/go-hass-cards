import { LitElement, type PropertyValues, type TemplateResult } from "lit";
import "../../../components/ha-fab";
import "../../../components/ha-floor-icon";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "../ha-config-section";
export declare class HaConfigAreasDashboard extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _areas;
    private _processAreas;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _renderArea;
    protected firstUpdated(changedProps: any): void;
    private _openAreaDetails;
    private _areaAdded;
    private _handleFloorAction;
    private _createFloor;
    private _editFloor;
    private _deleteFloor;
    private _createArea;
    private _showHelp;
    private _openAreaDialog;
    private _openFloorDialog;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-areas-dashboard": HaConfigAreasDashboard;
    }
}
