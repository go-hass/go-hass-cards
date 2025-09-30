import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-card";
import "../../../../components/ha-md-list";
import "../../../../components/ha-md-list-item";
import { type BackupContentExtended } from "../../../../data/backup";
import type { HomeAssistant } from "../../../../types";
declare class HaBackupDetailsSummary extends LitElement {
    hass: HomeAssistant;
    backup: BackupContentExtended;
    isHassio: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _renderErrorSummary;
    private _localizeFolder;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-details-summary": HaBackupDetailsSummary;
    }
}
export {};
