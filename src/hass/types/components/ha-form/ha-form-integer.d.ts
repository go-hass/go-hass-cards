import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-slider";
import "../ha-checkbox";
import "../ha-input-helper-text";
import "../ha-textfield";
import type { HaFormElement, HaFormIntegerData, HaFormIntegerSchema } from "./types";
import type { LocalizeFunc } from "../../common/translations/localize";
export declare class HaFormInteger extends LitElement implements HaFormElement {
    localize?: LocalizeFunc;
    schema: HaFormIntegerSchema;
    data?: HaFormIntegerData;
    label?: string;
    helper?: string;
    disabled: boolean;
    private _input?;
    private _lastValue?;
    focus(): void;
    protected render(): TemplateResult;
    protected updated(changedProps: PropertyValues): void;
    private get _value();
    private _handleCheckboxChange;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-integer": HaFormInteger;
    }
}
