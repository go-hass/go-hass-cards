import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-fade-in";
import "../../../components/ha-spinner";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-md-list";
import "../../../components/ha-md-list-item";
import type { BackupAgent, BackupConfig } from "../../../data/backup";
import "./components/ha-backup-details-summary";
import "./components/ha-backup-details-restore";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
declare class HaConfigBackupDetails extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    backupId: string;
    config?: BackupConfig;
    agents: BackupAgent[];
    private _backup?;
    private _agents;
    private _error?;
    protected firstUpdated(changedProps: any): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _restore;
    private _fetchBackup;
    private _handleAction;
    private _handleAgentAction;
    private _downloadBackup;
    private _deleteBackup;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-backup-details": HaConfigBackupDetails;
    }
}
export {};
