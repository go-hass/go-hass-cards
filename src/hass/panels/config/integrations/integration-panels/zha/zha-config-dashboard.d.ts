import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-fab";
import "../../../../../components/ha-form/ha-form";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-settings-row";
import "../../../../../components/ha-svg-icon";
import "../../../../../layouts/hass-tabs-subpage";
import type { PageNavigation } from "../../../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
import "../../../ha-config-section";
export declare const zhaTabs: PageNavigation[];
declare class ZHAConfigDashboard extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    configEntryId?: string;
    private _configuration?;
    private _networkSettings?;
    private _totalDevices;
    private _offlineDevices;
    private _error?;
    private _generatingBackup;
    private _configSaveButton?;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _fetchConfiguration;
    private _fetchSettings;
    private _fetchDevicesAndUpdateStatus;
    private _showChannelMigrationDialog;
    private _createAndDownloadBackup;
    private _openOptionFlow;
    private _dataChanged;
    private _updateConfiguration;
    private _computeLabelCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-config-dashboard": ZHAConfigDashboard;
    }
}
export {};
