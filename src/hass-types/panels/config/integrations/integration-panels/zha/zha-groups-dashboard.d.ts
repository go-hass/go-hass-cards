import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-fab";
import "../../../../../components/ha-icon-button";
import type { ZHAGroup } from "../../../../../data/zha";
import "../../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../../types";
export interface GroupRowData extends ZHAGroup {
    group?: GroupRowData;
    id?: string;
}
export declare class ZHAGroupsDashboard extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _groups;
    private _firstUpdatedCalled;
    connectedCallback(): void;
    protected firstUpdated(changedProperties: PropertyValues): void;
    private _formattedGroups;
    private _columns;
    protected render(): TemplateResult;
    private _fetchGroups;
    private _handleRowClicked;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-groups-dashboard": ZHAGroupsDashboard;
    }
}
