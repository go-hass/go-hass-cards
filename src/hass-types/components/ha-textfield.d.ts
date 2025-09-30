import { TextFieldBase } from "@material/mwc-textfield/mwc-textfield-base";
import type { TemplateResult, PropertyValues } from "lit";
export declare class HaTextField extends TextFieldBase {
    invalid?: boolean;
    errorMessage?: string;
    icon: boolean;
    iconTrailing: boolean;
    autocomplete?: string;
    autocorrect: boolean;
    inputSpellcheck?: string;
    formElement: HTMLInputElement;
    updated(changedProperties: PropertyValues): void;
    protected renderIcon(_icon: string, isTrailingIcon?: boolean): TemplateResult;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-textfield": HaTextField;
    }
}
