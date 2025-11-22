import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
type ActiveSlider = "low" | "high" | "value";
declare global {
    interface HASSDomEvents {
        "value-changing": {
            value: unknown;
        };
        "low-changing": {
            value: unknown;
        };
        "low-changed": {
            value: unknown;
        };
        "high-changing": {
            value: unknown;
        };
        "high-changed": {
            value: unknown;
        };
    }
}
export type ControlCircularSliderMode = "start" | "end" | "full";
export declare class HaControlCircularSlider extends LitElement {
    disabled: boolean;
    readonly: boolean;
    dual: boolean;
    mode?: ControlCircularSliderMode;
    inactive: boolean;
    label?: string;
    lowLabel?: string;
    highLabel?: string;
    value?: number;
    low?: number;
    high?: number;
    current?: number;
    step: number;
    min: number;
    max: number;
    preventInteractionOnScroll: boolean;
    _localValue?: number;
    _localLow?: number;
    _localHigh?: number;
    _activeSlider?: ActiveSlider;
    _lastSlider?: ActiveSlider;
    private _valueToPercentage;
    private _percentageToValue;
    private _steppedValue;
    private _boundedValue;
    protected updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _managers;
    private _getPercentageFromEvent;
    private _slider;
    private _interactions?;
    private _findActiveSlider;
    private _setActiveValue;
    private _getActiveValue;
    private _setupListeners;
    private get _tenPercentStep();
    private _handleKeyDown;
    private _handleKeyUp;
    private _destroyListeners;
    private _strokeCircleDashArc;
    private _strokeDashArc;
    protected renderArc(id: string, value: number | undefined, mode: ControlCircularSliderMode): TemplateResult<2> | typeof nothing;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-circular-slider": HaControlCircularSlider;
    }
}
export {};
