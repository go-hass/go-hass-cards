import { LitElement, nothing } from "lit";
import type { PropertyValues } from "lit";
import type { ClockCardConfig } from "../types";
import type { HomeAssistant } from "../../../../types";
export declare class HuiClockCardAnalog extends LitElement {
    hass?: HomeAssistant;
    config?: ClockCardConfig;
    private _dateTimeFormat?;
    private _hourOffsetSec?;
    private _minuteOffsetSec?;
    private _secondOffsetSec?;
    private _initDate;
    protected updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleVisibilityChange;
    private _computeOffsets;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-clock-card-analog": HuiClockCardAnalog;
    }
}
