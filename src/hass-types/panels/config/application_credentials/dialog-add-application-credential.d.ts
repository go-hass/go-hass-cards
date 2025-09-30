import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-combo-box";
import "../../../components/ha-fade-in";
import "../../../components/ha-markdown";
import "../../../components/ha-password-field";
import "../../../components/ha-spinner";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
import type { AddApplicationCredentialDialogParams } from "./show-dialog-add-application-credential";
export declare class DialogAddApplicationCredential extends LitElement {
    hass: HomeAssistant;
    private _loading;
    private _error?;
    private _params?;
    private _domain?;
    private _manifest?;
    private _name?;
    private _description?;
    private _clientId?;
    private _clientSecret?;
    private _domains?;
    private _config?;
    showDialog(params: AddApplicationCredentialDialogParams): void;
    private _fetchConfig;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    closeDialog(): void;
    private _handleDomainPicked;
    private _updateDescription;
    private _handleValueChanged;
    private _abortDialog;
    private _addApplicationCredential;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-add-application-credential": DialogAddApplicationCredential;
    }
}
