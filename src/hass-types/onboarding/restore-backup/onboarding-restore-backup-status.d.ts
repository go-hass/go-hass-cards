import "@material/mwc-linear-progress/mwc-linear-progress";
import { LitElement, type CSSResultGroup } from "lit";
import "../../components/ha-alert";
import "../../components/ha-button";
import type { LocalizeFunc } from "../../common/translations/localize";
import type { BackupOnboardingInfo } from "../../data/backup_onboarding";
declare class OnboardingRestoreBackupStatus extends LitElement {
    localize: LocalizeFunc;
    backupInfo: BackupOnboardingInfo;
    render(): import("lit-html").TemplateResult<1>;
    private _back;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-restore-backup-status": OnboardingRestoreBackupStatus;
    }
    interface HASSDomEvents {
        "restore-started": any;
    }
}
export {};
