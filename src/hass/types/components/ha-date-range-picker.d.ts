import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./date-range-picker";
import "./ha-button";
import "./ha-icon-button";
import "./ha-icon-button-next";
import "./ha-icon-button-prev";
import "./ha-list";
import "./ha-list-item";
import "./ha-textarea";
export type DateRangePickerRanges = Record<string, [Date, Date]>;
declare global {
    interface HASSDomEvents {
        "preset-selected": {
            index: number;
        };
    }
}
export declare class HaDateRangePicker extends LitElement {
    hass: HomeAssistant;
    startDate: Date;
    endDate: Date;
    ranges?: DateRangePickerRanges | false;
    private _ranges?;
    autoApply: boolean;
    timePicker: boolean;
    disabled: boolean;
    minimal: boolean;
    private _hour24format;
    extendedPresets: boolean;
    openingDirection?: "right" | "left" | "center" | "inline";
    private _calcedOpeningDirection?;
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _handleNext;
    private _handlePrev;
    private _shift;
    private _setDateRange;
    private _cancelDateRange;
    private _applyDateRange;
    private _formatDate;
    private get _dateRangePicker();
    private _handleInputClick;
    private _handleClick;
    private _handleChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-date-range-picker": HaDateRangePicker;
    }
}
