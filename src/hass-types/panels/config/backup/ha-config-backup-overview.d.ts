import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-fab";
import "../../../components/ha-spinner";
import "../../../components/ha-icon";
import "../../../components/ha-icon-next";
import "../../../components/ha-icon-overflow-menu";
import "../../../components/ha-list-item";
import "../../../components/ha-svg-icon";
import type { BackupAgent, BackupConfig, BackupContent, BackupInfo } from "../../../data/backup";
import type { ManagerStateEvent } from "../../../data/backup_manager";
import type { CloudStatus } from "../../../data/cloud";
import "../../../layouts/hass-subpage";
import "../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../types";
import "./components/overview/ha-backup-overview-backups";
import "./components/overview/ha-backup-overview-onboarding";
import "./components/overview/ha-backup-overview-progress";
import "./components/overview/ha-backup-overview-settings";
import "./components/overview/ha-backup-overview-summary";
declare class HaConfigBackupOverview extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatus;
    narrow: boolean;
    route: Route;
    manager: ManagerStateEvent;
    info?: BackupInfo;
    backups: BackupContent[];
    fetching: boolean;
    config?: BackupConfig;
    agents: BackupAgent[];
    private _uploadBackup;
    private _handleOnboardingButtonClick;
    private _setupAutomaticBackup;
    private _newBackup;
    private get _needsOnboarding();
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-backup-overview": HaConfigBackupOverview;
    }
}
export {};
