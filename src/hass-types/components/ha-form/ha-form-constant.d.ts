import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HaFormConstantSchema, HaFormElement } from "./types";
export declare class HaFormConstant extends LitElement implements HaFormElement {
    schema: HaFormConstantSchema;
    label: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-constant": HaFormConstant;
    }
}
