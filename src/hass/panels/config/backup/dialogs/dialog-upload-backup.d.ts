import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-file-upload";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-md-dialog";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { UploadBackupDialogParams } from "./show-dialog-upload-backup";
export declare class DialogUploadBackup extends LitElement implements HassDialog<UploadBackupDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _uploading;
    private _error?;
    private _formData?;
    private _dialog?;
    showDialog(params: UploadBackupDialogParams): Promise<void>;
    private _dialogClosed;
    closeDialog(): boolean;
    private _formValid;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _filePicked;
    private _filesCleared;
    private _upload;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-upload-backup": DialogUploadBackup;
    }
}
