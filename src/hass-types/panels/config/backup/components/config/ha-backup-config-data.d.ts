import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-expansion-panel";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-md-select";
import "../../../../../components/ha-md-select-option";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-switch";
import "../../../../../components/ha-tooltip";
import type { HomeAssistant } from "../../../../../types";
import "../ha-backup-addons-picker";
export interface FormData {
    homeassistant: boolean;
    database: boolean;
    media: boolean;
    share: boolean;
    local_addons: boolean;
    addons_mode: "all" | "custom" | "none";
    addons: string[];
}
export interface BackupConfigData {
    include_homeassistant?: boolean;
    include_database: boolean;
    include_folders?: string[];
    include_all_addons: boolean;
    include_addons?: string[];
}
declare global {
    interface HASSDomEvents {
        "backup-addons-fetched": undefined;
    }
}
declare class HaBackupConfigData extends LitElement {
    hass: HomeAssistant;
    forceHomeAssistant: boolean;
    hideAddonVersion: boolean;
    private value?;
    private _addons;
    private _showAddons;
    private _showDbOption;
    private _storageInfo?;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    private _fetchAddons;
    private _checkDbOption;
    private _fetchStorageInfo;
    private _hasLocalAddons;
    private _estimateBackupSize;
    private _getData;
    private _setData;
    protected render(): import("lit-html").TemplateResult<1>;
    private _switchChanged;
    private _selectChanged;
    private _addonsChanged;
    private _renderSizeEstimate;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-config-data": HaBackupConfigData;
    }
}
export {};
