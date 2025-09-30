import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-list-item";
import "../../../components/search-input";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "./error-log-card";
import "./system-log-card";
export declare class HaConfigLogs extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    route: Route;
    private _filter;
    private _detail;
    private systemLog?;
    private _selectedLogProvider;
    private _logProviders;
    connectedCallback(): void;
    protected firstUpdated(changedProps: any): void;
    private _filterChanged;
    protected render(): TemplateResult;
    private _showDetail;
    private _selectProvider;
    private _init;
    private _getInstalledAddons;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-logs": HaConfigLogs;
    }
}
