import { LitElement } from "lit";
import type { ManagerStateEvent } from "../../../../../data/backup_manager";
import type { HomeAssistant } from "../../../../../types";
import "../ha-backup-summary-card";
export declare class HaBackupOverviewProgress extends LitElement {
    hass: HomeAssistant;
    manager: ManagerStateEvent;
    private get _heading();
    private get _description();
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-overview-progress": HaBackupOverviewProgress;
    }
}
