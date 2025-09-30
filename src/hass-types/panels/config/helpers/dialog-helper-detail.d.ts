import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-list";
import "../../../components/ha-button";
import "../../../components/ha-list-item";
import "../../../components/ha-spinner";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import type { HomeAssistant } from "../../../types";
import type { ShowDialogHelperDetailParams } from "./show-dialog-helper-detail";
export declare class DialogHelperDetail extends LitElement {
    hass: HomeAssistant;
    private _item?;
    private _opened;
    private _domain?;
    private _error?;
    private _submitting;
    private _form?;
    private _helperFlows?;
    private _loading;
    private _filter?;
    private _params?;
    showDialog(params: ShowDialogHelperDetailParams): Promise<void>;
    closeDialog(): void;
    protected render(): TemplateResult<1> | typeof nothing;
    private _filterHelpers;
    private _filterChanged;
    private _valueChanged;
    private _createItem;
    private _domainPicked;
    private _focusForm;
    private _goBack;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-helper-detail": DialogHelperDetail;
    }
}
