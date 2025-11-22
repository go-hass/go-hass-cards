import "app-datepicker";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import type { DatePickerDialogParams } from "./ha-date-input";
import "./ha-dialog";
import "./ha-button";
export declare class HaDialogDatePicker extends LitElement {
    hass: HomeAssistant;
    value?: string;
    disabled: boolean;
    label?: string;
    private _params?;
    private _value?;
    showDialog(params: DatePickerDialogParams): Promise<void>;
    closeDialog(): void;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _clear;
    private _setToday;
    private _setValue;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-date-picker": HaDialogDatePicker;
    }
}
