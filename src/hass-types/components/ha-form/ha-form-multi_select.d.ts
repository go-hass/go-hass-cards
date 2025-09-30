import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-button-menu";
import "../ha-check-list-item";
import "../ha-checkbox";
import "../ha-formfield";
import "../ha-icon-button";
import "../ha-textfield";
import "../ha-md-button-menu";
import "../ha-md-menu-item";
import type { HaFormElement, HaFormMultiSelectData, HaFormMultiSelectSchema } from "./types";
export declare class HaFormMultiSelect extends LitElement implements HaFormElement {
    schema: HaFormMultiSelectSchema;
    data: HaFormMultiSelectData;
    label: string;
    disabled: boolean;
    private _opened;
    private _input?;
    focus(): void;
    protected render(): TemplateResult;
    protected _keydown(ev: any): void;
    protected _toggleItem(ev: any): void;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _handleValueChanged;
    private _handleOpen;
    private _handleClose;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-multi_select": HaFormMultiSelect;
    }
}
