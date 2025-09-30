import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import type { HomeAssistant } from "../../types";
import type { UpdateBackupDialogParams } from "./show-update-backup-dialog";
declare class DialogBox extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: UpdateBackupDialogParams): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _no;
    private _yes;
    private _cancel;
    closeDialog(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-update-backup": DialogBox;
    }
}
export {};
