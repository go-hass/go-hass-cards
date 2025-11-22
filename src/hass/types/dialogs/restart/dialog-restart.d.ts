import "@material/mwc-linear-progress/mwc-linear-progress";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-alert";
import "../../components/ha-expansion-panel";
import "../../components/ha-fade-in";
import "../../components/ha-icon-next";
import "../../components/ha-wa-dialog";
import "../../components/ha-md-list";
import "../../components/ha-md-list-item";
import "../../components/ha-spinner";
import type { HomeAssistant } from "../../types";
declare class DialogRestart extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _loadingHostInfo;
    private _loadingBackupInfo;
    private _hostInfo?;
    private _dialogOpen;
    showDialog(): Promise<void>;
    private _loadBackupState;
    private _loadHostInfo;
    private _dialogClosed;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _reload;
    private _getBackupProgressMessage;
    private _restartAction;
    private _hostAction;
    private _handleAction;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-restart": DialogRestart;
    }
}
export {};
