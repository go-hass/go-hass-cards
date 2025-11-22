import type { HaFormSchema } from "../../../components/ha-form/types";
import type { LovelaceConfigForm } from "../types";
import { HuiElementEditor } from "./hui-element-editor";
export declare class HuiFormElementEditor extends HuiElementEditor {
    schema: HaFormSchema[];
    protected getConfigForm(): Promise<LovelaceConfigForm | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-form-element-editor": HuiFormElementEditor;
    }
}
