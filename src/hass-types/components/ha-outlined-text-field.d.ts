import { OutlinedTextField } from "@material/web/textfield/internal/outlined-text-field";
import "./ha-outlined-field";
export declare class HaOutlinedTextField extends OutlinedTextField {
    protected readonly fieldTag: import("lit-html/static").StaticValue;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-outlined-text-field": HaOutlinedTextField;
    }
}
