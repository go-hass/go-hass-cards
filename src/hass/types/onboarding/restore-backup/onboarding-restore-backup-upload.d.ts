import { LitElement, type CSSResultGroup } from "lit";
import "../../components/ha-file-upload";
import "../../components/ha-alert";
import "../../components/ha-icon-button-arrow-prev";
import type { LocalizeFunc } from "../../common/translations/localize";
declare global {
    interface HASSDomEvents {
        "backup-uploaded": {
            backupId: string;
        };
    }
}
declare class OnboardingRestoreBackupUpload extends LitElement {
    supervisor: boolean;
    localize: LocalizeFunc;
    private _uploading;
    private _error?;
    render(): import("lit-html").TemplateResult<1>;
    private _filePicked;
    private _back;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-restore-backup-upload": OnboardingRestoreBackupUpload;
    }
}
export {};
