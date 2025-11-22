import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-svg-icon";
import "./ha-textfield";
export interface DatePickerDialogParams {
    value?: string;
    min?: string;
    max?: string;
    locale?: string;
    firstWeekday?: number;
    canClear?: boolean;
    onChange: (value: string | undefined) => void;
}
export declare class HaDateInput extends LitElement {
    locale: HomeAssistant["locale"];
    value?: string;
    min?: string;
    max?: string;
    disabled: boolean;
    required: boolean;
    label?: string;
    helper?: string;
    canClear: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _openDialog;
    private _keyDown;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-date-input": HaDateInput;
    }
}
