import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-icon-next";
import "../../../../components/ha-md-dialog";
import "../../../../components/ha-md-list";
import "../../../../components/ha-md-list-item";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-password-field";
import "../../../../components/ha-alert";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { DownloadDecryptedBackupDialogParams } from "./show-dialog-download-decrypted-backup";
declare class DialogDownloadDecryptedBackup extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _params?;
    private _dialog?;
    private _encryptionKey;
    private _error;
    showDialog(params: DownloadDecryptedBackupDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _cancel;
    private _submit;
    private _keyChanged;
    private get _agentId();
    private _downloadEncrypted;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-download-decrypted-backup": DialogDownloadDecryptedBackup;
    }
}
export {};
