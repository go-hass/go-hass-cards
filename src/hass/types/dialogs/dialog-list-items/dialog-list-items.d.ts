import { LitElement, nothing } from "lit";
import "../../components/ha-bottom-sheet";
import "../../components/ha-icon";
import "../../components/ha-md-list";
import "../../components/ha-md-list-item";
import "../../components/ha-svg-icon";
import type { HomeAssistant } from "../../types";
import type { HassDialog } from "../make-dialog-manager";
import type { ListItemsDialogParams } from "./show-list-items-dialog";
export declare class ListItemsDialog extends LitElement implements HassDialog<ListItemsDialogParams> {
    hass?: HomeAssistant;
    private _params?;
    showDialog(params: ListItemsDialogParams): Promise<void>;
    private _dialogClosed;
    private _itemClicked;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-list-items": ListItemsDialog;
    }
}
