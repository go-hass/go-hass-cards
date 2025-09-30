import { LitElement, type CSSResultGroup } from "lit";
import type { LocalizeFunc } from "../../common/translations/localize";
import "../../components/ha-button";
import "../../components/ha-icon-button-arrow-prev";
declare class OnboardingRestoreBackupNoCloudBackup extends LitElement {
    localize: LocalizeFunc;
    render(): import("lit-html").TemplateResult<1>;
    private _back;
    private _signOut;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-restore-backup-no-cloud-backup": OnboardingRestoreBackupNoCloudBackup;
    }
    interface HASSDomEvents {
        "sign-out": undefined;
    }
}
export {};
