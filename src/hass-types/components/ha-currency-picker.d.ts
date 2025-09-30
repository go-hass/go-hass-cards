import { LitElement } from "lit";
import "./ha-list-item";
import "./ha-select";
export declare class HaCurrencyPicker extends LitElement {
    language: string;
    value?: string;
    label?: string;
    required: boolean;
    disabled: boolean;
    private _getOptions;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-currency-picker": HaCurrencyPicker;
    }
}
