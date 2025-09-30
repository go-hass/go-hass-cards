import { LitElement, nothing } from "lit";
import "../../components/ha-dialog";
import "../../components/ha-svg-icon";
import "../../components/ha-switch";
import type { HomeAssistant } from "../../types";
import type { ConfirmEventDialogBoxParams } from "./show-confirm-event-dialog-box";
import "../../components/ha-button";
declare class ConfirmEventDialogBox extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: ConfirmEventDialogBoxParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _dismiss;
    private _confirm;
    private _confirmFuture;
    private _dialogClosed;
    private _close;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "confirm-event-dialog-box": ConfirmEventDialogBox;
    }
}
export {};
