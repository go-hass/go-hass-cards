import type { PropertyValues } from "lit";
import { HaTextField } from "./ha-textfield";
export declare class HaComboBoxTextField extends HaTextField {
    forceBlankValue: boolean;
    protected willUpdate(changedProps: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-combo-box-textfield": HaComboBoxTextField;
    }
}
