import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../ha-icon-button";
import "../ha-textfield";
import type { HaFormElement, HaFormStringData, HaFormStringSchema } from "./types";
import type { LocalizeFunc } from "../../common/translations/localize";
export declare class HaFormString extends LitElement implements HaFormElement {
    localize?: LocalizeFunc;
    localizeBaseKey: string;
    schema: HaFormStringSchema;
    data: HaFormStringData;
    label: string;
    helper?: string;
    disabled: boolean;
    protected unmaskedPassword: boolean;
    private _input?;
    focus(): void;
    protected render(): TemplateResult;
    protected renderIcon(): TemplateResult<1> | typeof nothing;
    protected updated(changedProps: PropertyValues): void;
    protected toggleUnmaskedPassword(): void;
    protected _valueChanged(ev: Event): void;
    protected get stringType(): string;
    protected get isPassword(): boolean;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-string": HaFormString;
    }
}
