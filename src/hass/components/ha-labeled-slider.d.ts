import { LitElement } from "lit";
import "./ha-icon";
import "./ha-input-helper-text";
import "./ha-slider";
declare class HaLabeledSlider extends LitElement {
    labeled: boolean;
    caption?: string;
    disabled: boolean;
    required: boolean;
    min: number;
    max: number;
    step: number;
    helper?: string;
    extra: boolean;
    icon?: string;
    value?: number;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getTitle;
    private _inputChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-labeled-slider": HaLabeledSlider;
    }
}
export {};
