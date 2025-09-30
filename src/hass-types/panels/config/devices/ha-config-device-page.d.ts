import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-battery-icon";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-next";
import "../../../components/ha-list-item";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import type { ConfigEntry } from "../../../data/config_entries";
import type { EntityRegistryEntry } from "../../../data/entity_registry";
import type { IntegrationManifest } from "../../../data/integration";
import "../../../layouts/hass-error-screen";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "../../logbook/ha-logbook";
import "./device-detail/ha-device-entities-card";
import "./device-detail/ha-device-info-card";
import "./device-detail/ha-device-via-devices-card";
export interface EntityRegistryStateEntry extends EntityRegistryEntry {
    stateName?: string | null;
}
export interface DeviceAction {
    href?: string;
    target?: string;
    action?: (ev: any) => void;
    label: string;
    icon?: string;
    trailingIcon?: string;
    classes?: string;
}
export interface DeviceAlert {
    level: "warning" | "error" | "info";
    text: string;
}
export declare class HaConfigDevicePage extends LitElement {
    hass: HomeAssistant;
    entries: ConfigEntry[];
    manifests: IntegrationManifest[];
    deviceId: string;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    private _related?;
    private _diagnosticDownloadLinks;
    private _deleteButtons;
    private _deviceActions;
    private _deviceAlerts;
    private _deviceAlertsActionsTimeout?;
    _entityReg: EntityRegistryEntry[];
    private _logbookTime;
    private _integrations;
    private _entities;
    private _getEntitiesSorted;
    private _getRelated;
    private _deviceIdInList;
    private _entityIds;
    private _entitiesByCategory;
    private _batteryEntity;
    private _batteryChargingEntity;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProps: any): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult<1> | typeof nothing;
    private _fetchData;
    private _getDiagnosticButtons;
    private _getDeleteActions;
    private _getDeviceActions;
    private _getDeviceAlerts;
    private _computeEntityName;
    private _onImageLoad;
    private _onImageError;
    private _findRelated;
    private _createScene;
    private _showScriptDialog;
    private _showAutomationDialog;
    private _renderIntegrationInfo;
    private _resetEntityIds;
    private _showSettings;
    private _enableDevice;
    private _signUrl;
    private _deviceActionClicked;
    private _voiceAssistantSetup;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-device-page": HaConfigDevicePage;
    }
}
