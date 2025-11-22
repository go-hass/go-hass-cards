import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-qr-code";
import "../../../components/ha-switch";
import "../../../components/ha-textfield";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { TagDetailDialogParams } from "./show-dialog-tag-detail";
declare class DialogTagDetail extends LitElement implements HassDialog<TagDetailDialogParams> {
    hass: HomeAssistant;
    private _id?;
    private _name;
    private _error?;
    private _params?;
    private _submitting;
    showDialog(params: TagDetailDialogParams): void;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _updateEntry;
    private _updateWriteEntry;
    private _deleteEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-tag-detail": DialogTagDetail;
    }
}
export {};
