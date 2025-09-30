import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-form/ha-form";
import "../../../components/ha-textfield";
import "../../../components/ha-button";
import type { HomeAssistant } from "../../../types";
import type { AdminChangePasswordDialogParams } from "./show-dialog-admin-change-password";
declare class DialogAdminChangePassword extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _userId?;
    private _data?;
    private _error?;
    private _submitting;
    private _success;
    showDialog(params: AdminChangePasswordDialogParams): void;
    closeDialog(): void;
    private _computeLabel;
    private _computeError;
    private _validate;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _changePassword;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-admin-change-password": DialogAdminChangePassword;
    }
}
export {};
