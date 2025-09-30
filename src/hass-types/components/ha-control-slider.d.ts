import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { FrontendLocaleData } from "../data/translation";
declare global {
    interface HASSDomEvents {
        "slider-moved": {
            value?: number;
        };
    }
}
type TooltipPosition = "top" | "bottom" | "left" | "right";
type TooltipMode = "never" | "always" | "interaction";
type SliderMode = "start" | "end" | "cursor";
export declare class HaControlSlider extends LitElement {
    locale?: FrontendLocaleData;
    disabled: boolean;
    mode?: SliderMode;
    vertical: boolean;
    showHandle: boolean;
    inverted: boolean;
    tooltipPosition?: TooltipPosition;
    unit?: string;
    tooltipMode: TooltipMode;
    touchAction?: string;
    value?: number;
    step: number;
    min: number;
    max: number;
    label?: string;
    pressed: boolean;
    tooltipVisible: boolean;
    private _mc?;
    valueToPercentage(value: number): number;
    percentageToValue(percentage: number): number;
    steppedValue(value: number): number;
    boundedValue(value: number): number;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private slider;
    setupListeners(): void;
    destroyListeners(): void;
    private get _tenPercentStep();
    private _showTooltip;
    private _hideTooltip;
    private _handleKeyDown;
    private _tooltipTimeout?;
    private _handleKeyUp;
    private _getPercentageFromEvent;
    private _formatValue;
    private _renderTooltip;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-slider": HaControlSlider;
    }
}
export {};
