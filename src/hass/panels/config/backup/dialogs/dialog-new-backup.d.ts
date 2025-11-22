import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-icon-next";
import "../../../../components/ha-md-list";
import "../../../../components/ha-wa-dialog";
import "../../../../components/ha-md-list-item";
import "../../../../components/ha-svg-icon";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { NewBackupDialogParams } from "./show-dialog-new-backup";
declare class DialogNewBackup extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _params?;
    showDialog(params: NewBackupDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _manual;
    private _automatic;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-new-backup": DialogNewBackup;
    }
}
export {};
