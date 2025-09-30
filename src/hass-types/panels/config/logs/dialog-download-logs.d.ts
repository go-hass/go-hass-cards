import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dialog-header";
import "../../../components/ha-icon-button";
import "../../../components/ha-md-dialog";
import "../../../components/ha-md-select";
import "../../../components/ha-md-select-option";
import type { HomeAssistant } from "../../../types";
import type { DownloadLogsDialogParams } from "./show-dialog-download-logs";
declare class DownloadLogsDialog extends LitElement {
    hass: HomeAssistant;
    private _dialogParams?;
    private _lineCount;
    private _dialogElement;
    showDialog(dialogParams: DownloadLogsDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _downloadLogs;
    private _setNumberOfLogs;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-download-logs": DownloadLogsDialog;
    }
}
export {};
