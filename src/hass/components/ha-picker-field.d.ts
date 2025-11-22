import { LitElement, type CSSResultGroup, type TemplateResult } from "lit";
import "./ha-combo-box-item";
import type { HaComboBoxItem } from "./ha-combo-box-item";
import "./ha-icon-button";
declare global {
    interface HASSDomEvents {
        clear: undefined;
    }
}
export type PickerValueRenderer = (value: string) => TemplateResult<1>;
export declare class HaPickerField extends LitElement {
    disabled: boolean;
    required: boolean;
    value?: string;
    helper?: string;
    placeholder?: string;
    hideClearIcon: boolean;
    valueRenderer?: PickerValueRenderer;
    item: HaComboBoxItem;
    focus(): Promise<void>;
    protected render(): TemplateResult<1>;
    private _clear;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-picker-field": HaPickerField;
    }
}
