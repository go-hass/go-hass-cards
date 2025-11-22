import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import "./onboarding-loading";
import "./restore-backup/onboarding-restore-backup-restore";
import "./restore-backup/onboarding-restore-backup-status";
declare class OnboardingRestoreBackup extends LitElement {
    localize: LocalizeFunc;
    supervisor: boolean;
    mode: "upload" | "cloud";
    private _view;
    private _backup?;
    private _backupInfo?;
    private _error?;
    private _failed?;
    private _cloudStatus?;
    private _backupId?;
    private _restoreRunning?;
    private _loadedIntegrations;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    private _loadBackupInfo;
    private _resetAndReload;
    private _showCloudBackup;
    private _scheduleLoadBackupInfo;
    private _backupUploaded;
    private _restoreStarted;
    private _signOut;
    private _back;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-restore-backup": OnboardingRestoreBackup;
    }
}
export {};
