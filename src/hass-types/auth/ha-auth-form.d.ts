import { HaForm } from "../components/ha-form/ha-form";
import "./ha-auth-form-string";
import type { LocalizeFunc } from "../common/translations/localize";
export declare class HaAuthForm extends HaForm {
    localize?: LocalizeFunc;
    protected getFormProperties(): Record<string, any>;
    protected fieldElementName(type: string): string;
    protected createRenderRoot(): this;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-auth-form": HaAuthForm;
    }
}
