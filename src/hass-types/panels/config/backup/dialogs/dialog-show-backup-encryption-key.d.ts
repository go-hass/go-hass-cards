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
import type { ShowBackupEncryptionKeyDialogParams } from "./show-dialog-show-backup-encryption-key";
declare class DialogShowBackupEncryptionKey extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _params?;
    private _dialog;
    showDialog(params: ShowBackupEncryptionKeyDialogParams): void;
    closeDialog(): boolean;
    private _closeDialog;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _copyKeyToClipboard;
    private _download;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-show-backup-encryption-key": DialogShowBackupEncryptionKey;
    }
}
export {};
