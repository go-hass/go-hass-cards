import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../components/ha-alert";
import "../../components/ha-wa-dialog";
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
    showDialog(params: RestartWaitDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    private _getWaitMessage;
    protected render(): import("lit-html").TemplateResult<1>;
    private _loadBackupState;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-restart-wait": DialogRestartWait;
    }
}
export {};
