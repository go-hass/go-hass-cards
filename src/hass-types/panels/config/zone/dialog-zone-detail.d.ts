import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-form/ha-form";
import "../../../components/ha-button";
import type { HomeAssistant } from "../../../types";
import type { ZoneDetailDialogParams } from "./show-dialog-zone-detail";
declare class DialogZoneDetail extends LitElement {
    hass: HomeAssistant;
    private _error?;
    private _data?;
    private _params?;
    private _submitting;
    showDialog(params: ZoneDetailDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _schema;
    private _formData;
    private _valueChanged;
    private _computeLabel;
    private _updateEntry;
    private _deleteEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zone-detail": DialogZoneDetail;
    }
}
export {};
