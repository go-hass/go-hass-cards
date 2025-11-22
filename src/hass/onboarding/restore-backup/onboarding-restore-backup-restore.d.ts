import { LitElement, type CSSResultGroup } from "lit";
import "../../components/ha-button";
import "../../components/ha-alert";
import "../../components/ha-md-list";
import "../../components/ha-md-list-item";
import "../../components/buttons/ha-progress-button";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-password-field";
import "../../panels/config/backup/components/ha-backup-data-picker";
import "../../panels/config/backup/components/ha-backup-formfield-label";
import type { LocalizeFunc } from "../../common/translations/localize";
import { type BackupContentExtended } from "../../data/backup";
declare class OnboardingRestoreBackupRestore extends LitElement {
    localize: LocalizeFunc;
    backup: BackupContentExtended;
    supervisor: boolean;
    error?: string;
    mode: "upload" | "cloud";
    private _encryptionKey;
    private _encryptionKeyWrong;
    private _error?;
    private _loading;
    private _selectedData?;
    private _progressButtonElement;
    render(): import("lit-html").TemplateResult<1>;
    protected willUpdate(): void;
    private _keyDown;
    private _signOut;
    private _selectedBackupChanged;
    private _encryptionKeyChanged;
    private _startRestore;
    private _back;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-restore-backup-restore": OnboardingRestoreBackupRestore;
    }
    interface HASSDomEvents {
        "restore-started": any;
        "restore-backup-back": any;
    }
}
export {};
