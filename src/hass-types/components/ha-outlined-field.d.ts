import { OutlinedField } from "@material/web/field/internal/outlined-field";
export declare class HaOutlinedField extends OutlinedField {
    protected readonly fieldTag: import("lit-html/static").StaticValue;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-outlined-field": HaOutlinedField;
    }
}
