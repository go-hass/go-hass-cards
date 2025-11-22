import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-icon";
import "./ha-svg-icon";
export interface ControlSelectOption {
    value: string;
    label?: string;
    icon?: TemplateResult;
    path?: string;
}
export declare class HaControlSelect extends LitElement {
    disabled: boolean;
    options?: ControlSelectOption[];
    value?: string;
    vertical: boolean;
    hideOptionLabel: boolean;
    label?: string;
    private _activeIndex?;
    private _handleFocus;
    private _focusOption;
    private _handleBlur;
    private _handleKeydown;
    private _handleOptionClick;
    private _handleOptionMouseDown;
    private _handleOptionMouseUp;
    private _handleOptionFocus;
    protected render(): TemplateResult<1>;
    private _renderOption;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-select": HaControlSelect;
    }
}
