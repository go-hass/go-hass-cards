import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-icon-button-prev";
import "../../../../components/ha-md-dialog";
import "../../../../components/ha-md-list";
import "../../../../components/ha-md-list-item";
import "../../../../components/ha-password-field";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { SetBackupEncryptionKeyDialogParams } from "./show-dialog-set-backup-encryption-key";
declare class DialogSetBackupEncryptionKey extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _step?;
    private _params?;
    private _dialog;
    private _newEncryptionKey?;
    showDialog(params: SetBackupEncryptionKeyDialogParams): void;
    closeDialog(): boolean;
    private _done;
    private _nextStep;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderStepContent;
    private _copyKeyToClipboard;
    private _download;
    private _submit;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-set-backup-encryption-key": DialogSetBackupEncryptionKey;
    }
}
export {};
