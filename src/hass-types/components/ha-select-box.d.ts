import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-radio";
interface SelectBoxOptionImage {
    src: string;
    src_dark?: string;
    flip_rtl?: boolean;
}
export interface SelectBoxOption {
    label?: string;
    description?: string;
    image?: string | SelectBoxOptionImage;
    value: string;
    disabled?: boolean;
}
export declare class HaSelectBox extends LitElement {
    hass?: HomeAssistant;
    options: SelectBoxOption[];
    value?: string;
    disabled?: boolean;
    maxColumns?: number;
    render(): import("lit-html").TemplateResult<1>;
    private _renderOption;
    private _labelClick;
    private _radioChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-select-box": HaSelectBox;
    }
}
export {};
