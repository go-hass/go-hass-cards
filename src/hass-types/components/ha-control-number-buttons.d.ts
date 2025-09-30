import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { FrontendLocaleData } from "../data/translation";
import "./ha-svg-icon";
export declare class HaControlNumberButton extends LitElement {
    locale?: FrontendLocaleData;
    disabled: boolean;
    label?: string;
    step?: number;
    value?: number;
    min?: number;
    max?: number;
    unit?: string;
    formatOptions: Intl.NumberFormatOptions;
    _input: HTMLDivElement;
    private _hideUnit;
    private _boundedValue;
    private get _step();
    private get _value();
    private get _tenPercentStep();
    private _handlePlusButton;
    private _handleMinusButton;
    private _increment;
    private _decrement;
    private _handleKeyDown;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-number-buttons": HaControlNumberButton;
    }
}
