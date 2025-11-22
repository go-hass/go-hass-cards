import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { ConfigEntry } from "../../../data/config_entries";
import type { DiagnosticInfo } from "../../../data/diagnostics";
import type { EntityRegistryEntry } from "../../../data/entity_registry";
import type { IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import "./ha-config-entry-device-row";
import "./ha-config-sub-entry-row";
declare class HaConfigEntryRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    manifest?: IntegrationManifest;
    diagnosticHandler?: DiagnosticInfo;
    entities: EntityRegistryEntry[];
    entry: ConfigEntry;
    private _expanded;
    private _devicesExpanded;
    private _subEntries?;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): TemplateResult<1>;
    private _fetchSubEntries;
    private _configPanel;
    private _getEntities;
    private _getDevices;
    private _getServices;
    private _toggleExpand;
    private _toggleOwnDevices;
    private _showOptions;
    private _applicationCredentialForRemove;
    private _removeApplicationCredential;
    private _handleReload;
    private _handleReconfigure;
    private _handleCopy;
    private _handleRename;
    private _signUrl;
    private _handleDisable;
    private _handleEnable;
    private _handleDelete;
    private _handleSystemOptions;
    private _addSubEntry;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-entry-row": HaConfigEntryRow;
    }
}
export {};
