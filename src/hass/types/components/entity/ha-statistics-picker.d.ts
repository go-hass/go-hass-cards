import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "./ha-statistic-picker";
declare class HaStatisticsPicker extends LitElement {
    hass?: HomeAssistant;
    value?: string[];
    statisticIds?: string[];
    statisticTypes?: "mean" | "sum";
    label?: string;
    placeholder?: string;
    allowCustomEntity: any;
    /**
     * Show only statistics natively stored with these units of measurements.
     * @attr include-statistics-unit-of-measurement
     */
    includeStatisticsUnitOfMeasurement?: string[] | string;
    /**
     * Show only statistics with these unit classes.
     * @attr include-unit-class
     */
    includeUnitClass?: string | string[];
    /**
     * Show only statistics with these device classes.
     * @attr include-device-class
     */
    includeDeviceClass?: string | string[];
    /**
     * Ignore filtering of statistics type and units when only a single statistic is selected.
     * @type {boolean}
     * @attr ignore-restrictions-on-first-statistic
     */
    ignoreRestrictionsOnFirstStatistic: boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private get _currentStatistics();
    private _updateStatistics;
    private _statisticChanged;
    private _addStatistic;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-statistics-picker": HaStatisticsPicker;
    }
}
export {};
