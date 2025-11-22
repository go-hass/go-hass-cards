import { LitElement, nothing } from "lit";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import "../../ha-dialog-header";
import "../../ha-icon-button";
import "../../ha-icon-next";
import "../../ha-md-list";
import "../../ha-md-list-item";
import "../../ha-svg-icon";
import "../../ha-wa-dialog";
import "../ha-target-picker-item-row";
import type { TargetDetailsDialogParams } from "./show-dialog-target-details";
declare class DialogTargetDetails extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _params?;
    private _opened;
    showDialog(params: TargetDetailsDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-target-details": DialogTargetDetails;
    }
}
export {};
