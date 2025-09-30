import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-navigation-list";
import type { CloudStatus } from "../../../data/cloud";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "../ha-config-section";
declare class HaConfigSystemNavigation extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    cloudStatus?: CloudStatus;
    showAdvanced: boolean;
    private _latestBackupDate?;
    private _boardName?;
    private _storageInfo?;
    private _externalAccess;
    protected render(): TemplateResult;
    protected firstUpdated(_changedProperties: any): void;
    private _fetchBackupInfo;
    private _fetchHardwareInfo;
    private _fetchStorageInfo;
    private _fetchNetworkStatus;
    private _showRestartDialog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-system-navigation": HaConfigSystemNavigation;
    }
}
export {};
