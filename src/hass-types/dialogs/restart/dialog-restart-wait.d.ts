import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-alert";
import "../../components/ha-dialog-header";
import "../../components/ha-icon-button";
import "../../components/ha-md-dialog";
import "../../components/ha-spinner";
import type { HomeAssistant } from "../../types";
import type { RestartWaitDialogParams } from "./show-dialog-restart";
declare class DialogRestartWait extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _title;
    private _actionOnIdle?;
    private _error?;
    private _backupState?;
    private _backupEventsSubscription?;
    private _dialog?;
    showDialog(params: RestartWaitDialogParams): Promise<void>;
    private _dialogClosed;
    closeDialog(): void;
    private _getWaitMessage;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _loadBackupState;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-restart-wait": DialogRestartWait;
    }
}
export {};
