import { FormfieldBase } from "@material/mwc-formfield/mwc-formfield-base";
export declare class HaFormfield extends FormfieldBase {
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    protected _labelClick(): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-formfield": HaFormfield;
    }
}
