import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-entities-picker";
import "../../../components/ha-button";
import "../../../components/ha-icon-button";
import "../../../components/ha-picture-upload";
import "../../../components/ha-settings-row";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
import type { PersonDetailDialogParams } from "./show-dialog-person-detail";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
declare class DialogPersonDetail extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _name;
    private _userId?;
    private _user?;
    private _isAdmin?;
    private _localOnly?;
    private _deviceTrackers;
    private _picture;
    private _error?;
    private _params?;
    private _submitting;
    private _personExists;
    private _deviceTrackersAvailable;
    showDialog(params: PersonDetailDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderUserFields;
    private _nameChanged;
    private _adminChanged;
    private _localOnlyChanged;
    private _allowLoginChanged;
    private _deviceTrackersChanged;
    private _pictureChanged;
    private _changePassword;
    private _changeUsername;
    private _updateEntry;
    private _deleteEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-person-detail": DialogPersonDetail;
    }
}
export {};
