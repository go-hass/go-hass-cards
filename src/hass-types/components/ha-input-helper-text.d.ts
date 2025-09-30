import type { TemplateResult } from "lit";
import { LitElement } from "lit";
declare class InputHelperText extends LitElement {
    disabled: boolean;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input-helper-text": InputHelperText;
    }
}
export {};
