import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-fade-in";
import "../../../components/ha-icon-button";
import "../../../components/ha-md-list";
import "../../../components/ha-md-list-item";
import "../../../components/ha-spinner";
import "../../../components/ha-switch";
import type { BackupAgent, BackupConfig } from "../../../data/backup";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "./components/config/ha-backup-config-retention";
import "./components/ha-backup-data-picker";
declare class HaConfigBackupDetails extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    agentId: string;
    config?: BackupConfig;
    agents: BackupAgent[];
    private _agent?;
    private _error?;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _isEncryptionTurnedOn;
    private _fetchAgent;
    private _updateAgentConfig;
    private _retentionChanged;
    private _updateAgentEncryption;
    private _turnOnEncryption;
    private _turnOffEncryption;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-backup-location": HaConfigBackupDetails;
    }
}
export {};
