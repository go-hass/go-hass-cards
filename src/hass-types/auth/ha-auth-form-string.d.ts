import type { TemplateResult } from "lit";
import { HaFormString } from "../components/ha-form/ha-form-string";
import "../components/ha-icon-button";
import "./ha-auth-textfield";
export declare class HaAuthFormString extends HaFormString {
    protected createRenderRoot(): this;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-auth-form-string": HaAuthFormString;
    }
}
