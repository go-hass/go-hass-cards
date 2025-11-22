import { LitElement, nothing } from "lit";
import type { ConstantSelector } from "../../data/selector";
export declare class HaSelectorConstant extends LitElement {
    selector: ConstantSelector;
    disabled: boolean;
    localizeValue?: (key: string) => string;
    protected render(): string | number | boolean | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-constant": HaSelectorConstant;
    }
}
