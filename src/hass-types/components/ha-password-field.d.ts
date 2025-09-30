import type { TextAreaCharCounter } from "@material/mwc-textfield/mwc-textfield-base";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon-button";
import "./ha-textfield";
export declare class HaPasswordField extends LitElement {
    hass?: HomeAssistant;
    invalid?: boolean;
    errorMessage?: string;
    icon: boolean;
    iconTrailing: boolean;
    autocomplete?: string;
    autocorrect: boolean;
    inputSpellcheck?: string;
    value: string;
    placeholder: string;
    label: string;
    disabled: boolean;
    required: boolean;
    minLength: number;
    maxLength: number;
    outlined: boolean;
    helper: string;
    validateOnInitialRender: boolean;
    validationMessage: string;
    autoValidate: boolean;
    pattern: string;
    size: number | null;
    helperPersistent: boolean;
    charCounter: boolean | TextAreaCharCounter;
    endAligned: boolean;
    prefix: string;
    suffix: string;
    name: string;
    inputMode: string;
    readOnly: boolean;
    autocapitalize: string;
    private _unmaskedPassword;
    private _textField;
    protected render(): import("lit-html").TemplateResult<1>;
    focus(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    layout(): Promise<void>;
    private _toggleUnmaskedPassword;
    private _handleInputEvent;
    private _handleChangeEvent;
    private _reDispatchEvent;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-password-field": HaPasswordField;
    }
}
