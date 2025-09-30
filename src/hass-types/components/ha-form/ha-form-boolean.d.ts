import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HaFormBooleanData, HaFormBooleanSchema, HaFormElement } from "./types";
import "../ha-checkbox";
import "../ha-formfield";
export declare class HaFormBoolean extends LitElement implements HaFormElement {
    schema: HaFormBooleanSchema;
    data: HaFormBooleanData;
    label: string;
    helper?: string;
    disabled: boolean;
    private _input?;
    focus(): void;
    protected render(): TemplateResult;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-boolean": HaFormBoolean;
    }
}
