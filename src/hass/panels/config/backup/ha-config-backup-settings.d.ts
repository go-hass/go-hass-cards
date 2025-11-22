import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-next";
import "../../../components/ha-list-item";
import "../../../components/ha-password-field";
import "../../../components/ha-svg-icon";
import type { BackupAgent, BackupConfig } from "../../../data/backup";
import type { CloudStatus } from "../../../data/cloud";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "./components/config/ha-backup-config-addon";
import "./components/config/ha-backup-config-agents";
import "./components/config/ha-backup-config-data";
import "./components/config/ha-backup-config-encryption-key";
import "./components/config/ha-backup-config-schedule";
declare class HaConfigBackupSettings extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatus;
    narrow: boolean;
    config?: BackupConfig;
    agents: BackupAgent[];
    private _config?;
    private _supervisorUpdateConfig?;
    private _supervisorUpdateConfigError?;
    protected willUpdate(changedProperties: PropertyValues): void;
    connectedCallback(): void;
    private _getSupervisorUpdateConfig;
    private _scrollToSection;
    private _scrolltoHash;
    private _clearHash;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _changeLocalLocation;
    private _supervisorUpdateConfigChanged;
    private _scheduleConfigChanged;
    private get _dataConfig();
    private _dataConfigChanged;
    private _agentsConfigChanged;
    private _encryptionKeyChanged;
    private _debounceSaveSupervisorUpdateConfig;
    private _saveSupervisorUpdateConfig;
    private _debounceSave;
    private _save;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-backup-settings": HaConfigBackupSettings;
    }
}
export {};
