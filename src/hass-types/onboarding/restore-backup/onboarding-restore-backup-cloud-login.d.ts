import { LitElement, type CSSResultGroup } from "lit";
import "../../panels/config/cloud/login/cloud-login";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-spinner";
import type { LocalizeFunc } from "../../common/translations/localize";
import type { BackupContentExtended } from "../../data/backup";
declare class OnboardingRestoreBackupCloudLogin extends LitElement {
    localize: LocalizeFunc;
    backup: BackupContentExtended;
    private _email?;
    private _view;
    private _showResetPasswordDone;
    private _cloudLoginElement?;
    private _forgotPasswordElement?;
    render(): import("lit-html").TemplateResult<1>;
    private _back;
    private _renderResetPasswordDone;
    private _showForgotPassword;
    private _emailChanged;
    private _showPasswordResetDone;
    private _dismissResetPasswordDoneInfo;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-restore-backup-cloud-login": OnboardingRestoreBackupCloudLogin;
    }
}
export {};
