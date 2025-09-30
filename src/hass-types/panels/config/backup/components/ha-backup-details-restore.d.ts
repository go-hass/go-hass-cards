import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-md-list";
import "../../../../components/ha-md-list-item";
import "../../../../components/ha-button";
import "./ha-backup-data-picker";
import type { HomeAssistant } from "../../../../types";
import type { LocalizeFunc } from "../../../../common/translations/localize";
import type { BackupContentExtended, BackupData } from "../../../../data/backup";
declare class HaBackupDetailsRestore extends LitElement {
    hass?: HomeAssistant;
    localize: LocalizeFunc;
    backup: BackupContentExtended;
    haRequired: boolean;
    translationKeyPanel: "page-onboarding.restore" | "config.backup";
    private _selectedData?;
    protected willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
    private _restore;
    private _selectedBackupChanged;
    private _isHomeAssistantRequired;
    private get _isRestoreDisabled();
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-details-restore": HaBackupDetailsRestore;
    }
    interface HASSDomEvents {
        "backup-restore": {
            selectedData?: BackupData;
        };
    }
}
export {};
