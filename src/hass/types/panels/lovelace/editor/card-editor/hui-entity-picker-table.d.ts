import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/data-table/ha-data-table";
import "../../../../components/entity/state-badge";
import "../../../../components/ha-relative-time";
import type { HomeAssistant } from "../../../../types";
export declare class HuiEntityPickerTable extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    noLabelFloat?: boolean;
    entities?: string[];
    protected firstUpdated(_changedProperties: PropertyValues): void;
    private _data;
    protected render(): TemplateResult;
    private _columns;
    private _handleSelectionChanged;
    private _handleEntityClicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-picker-table": HuiEntityPickerTable;
    }
}
