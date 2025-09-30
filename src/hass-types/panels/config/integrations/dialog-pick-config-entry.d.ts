import { LitElement, nothing } from "lit";
import "../../../components/ha-dialog-header";
import "../../../components/ha-icon-button";
import "../../../components/ha-md-dialog";
import "../../../components/ha-md-list";
import "../../../components/ha-md-list-item";
import type { HomeAssistant } from "../../../types";
import type { PickConfigEntryDialogParams } from "./show-pick-config-entry-dialog";
export declare class DialogPickConfigEntry extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _dialog?;
    showDialog(params: PickConfigEntryDialogParams): void;
    private _dialogClosed;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _itemPicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-pick-config-entry": DialogPickConfigEntry;
    }
}
