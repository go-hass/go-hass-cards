import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-icon-button";
import "./ha-input-helper-text";
import "./ha-list-item";
import "./ha-select";
import "./ha-textfield";
export interface TimeChangedEvent {
    days?: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    amPm?: "AM" | "PM";
}
export declare class HaBaseTimeInput extends LitElement {
    /**
     * Label for the input
     */
    label?: string;
    /**
     * Helper for the input
     */
    helper?: string;
    /**
     * auto validate time inputs
     */
    autoValidate: boolean;
    /**
     * determines if inputs are required
     */
    required: boolean;
    /**
     * 12 or 24 hr format
     */
    format: 12 | 24;
    /**
     * disables the inputs
     */
    disabled: boolean;
    /**
     * day
     */
    days: number;
    /**
     * hour
     */
    hours: number;
    /**
     * minute
     */
    minutes: number;
    /**
     * second
     */
    seconds: number;
    /**
     * milli second
     */
    milliseconds: number;
    /**
     * Label for the day input
     */
    dayLabel: string;
    /**
     * Label for the hour input
     */
    hourLabel: string;
    /**
     * Label for the min input
     */
    minLabel: string;
    /**
     * Label for the sec input
     */
    secLabel: string;
    /**
     * Label for the milli sec input
     */
    millisecLabel: string;
    /**
     * show the sec field
     */
    enableSecond: boolean;
    /**
     * show the milli sec field
     */
    enableMillisecond: boolean;
    /**
     * show the day field
     */
    enableDay: boolean;
    /**
     * limit hours input
     */
    noHoursLimit: boolean;
    /**
     * AM or PM
     */
    amPm: "AM" | "PM";
    clearable?: boolean;
    protected render(): TemplateResult;
    private _clearValue;
    private _valueChanged;
    private _onFocus;
    /**
     * Format time fragments
     */
    private _formatValue;
    /**
     * 24 hour format has a max hr of 23
     */
    private get _hourMax();
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-base-time-input": HaBaseTimeInput;
    }
}
