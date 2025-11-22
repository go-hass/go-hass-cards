import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import type { BackupContent } from "../../../../../data/backup";
import type { HomeAssistant } from "../../../../../types";
declare class HaBackupOverviewBackups extends LitElement {
    hass: HomeAssistant;
    backups: BackupContent[];
    private _stats;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-overview-backups": HaBackupOverviewBackups;
    }
}
export {};
