import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-icon-button";
import "../../../components/ha-label";
import "../../../components/ha-settings-row";
import "../../../components/ha-svg-icon";
import "../../../components/ha-switch";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
import type { UserDetailDialogParams } from "./show-dialog-user-detail";
declare class DialogUserDetail extends LitElement {
    hass: HomeAssistant;
    private _name;
    private _isAdmin?;
    private _localOnly?;
    private _isActive?;
    private _error?;
    private _params?;
    private _submitting;
    showDialog(params: UserDetailDialogParams): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _nameChanged;
    private _adminChanged;
    private _localOnlyChanged;
    private _activeChanged;
    private _updateEntry;
    private _deleteEntry;
    private _changeUsername;
    private _changePassword;
    private _close;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-user-detail": DialogUserDetail;
    }
}
export {};
