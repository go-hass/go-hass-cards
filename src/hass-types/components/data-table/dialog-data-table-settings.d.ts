import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-button";
import "../ha-list";
import "../ha-list-item";
import "../ha-sortable";
import type { DataTableSettingsDialogParams } from "./show-dialog-data-table-settings";
export declare class DialogDataTableSettings extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _columnOrder?;
    private _hiddenColumns?;
    showDialog(params: DataTableSettingsDialogParams): void;
    closeDialog(): void;
    private _sortedColumns;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _columnMoved;
    private _toggle;
    private _reset;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-data-table-settings": DialogDataTableSettings;
    }
}
