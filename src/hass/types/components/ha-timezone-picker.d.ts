import { LitElement } from "lit";
import "./ha-list-item";
import "./ha-select";
export declare class HaTimeZonePicker extends LitElement {
    value?: string;
    label?: string;
    required: boolean;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-timezone-picker": HaTimeZonePicker;
    }
}
