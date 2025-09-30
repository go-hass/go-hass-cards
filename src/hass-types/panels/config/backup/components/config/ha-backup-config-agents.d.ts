import { LitElement, type TemplateResult } from "lit";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/ha-switch";
import type { BackupAgent, BackupAgentsConfig } from "../../../../../data/backup";
import type { CloudStatus } from "../../../../../data/cloud";
import type { HomeAssistant } from "../../../../../types";
declare class HaBackupConfigAgents extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatus;
    agents: BackupAgent[];
    agentsConfig?: BackupAgentsConfig;
    showSettings: boolean;
    private value?;
    private get _value();
    private _description;
    private _availableAgents;
    private _unavailableAgents;
    private _renderAgentIcon;
    protected render(): TemplateResult<1>;
    private _showAgentSettings;
    private _deleteAgent;
    private _agentToggled;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-config-agents": HaBackupConfigAgents;
    }
}
export {};
