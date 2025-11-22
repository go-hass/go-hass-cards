import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
declare global {
    interface HASSDomEvents {
        "slider-moved": {
            value?: number;
        };
    }
}
type TooltipMode = "never" | "always" | "interaction";
export declare class HaGridLayoutSlider extends LitElement {
    disabled: boolean;
    vertical: boolean;
    touchAction?: string;
    tooltipMode: TooltipMode;
    value?: number;
    step: number;
    min: number;
    max: number;
    range?: number;
    pressed: boolean;
    tooltipVisible: boolean;
    private _mc?;
    private get _range();
    private _valueToPercentage;
    private _percentageToValue;
    private _steppedValue;
    private _boundedValue;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private slider;
    setupListeners(): void;
    destroyListeners(): void;
    private get _tenPercentStep();
    private _handleKeyDown;
    private _handleKeyUp;
    private _tooltipTimeout?;
    private _showTooltip;
    private _hideTooltip;
    private _getPercentageFromEvent;
    private _renderTooltip;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-grid-layout-slider": HaGridLayoutSlider;
    }
}
export {};
