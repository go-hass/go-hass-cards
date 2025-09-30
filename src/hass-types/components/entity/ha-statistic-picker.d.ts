import { LitElement, type PropertyValues } from "lit";
import { type StatisticsMetaData } from "../../data/recorder";
import type { HomeAssistant } from "../../types";
import "../ha-combo-box-item";
import "../ha-generic-picker";
import "../ha-icon-button";
import "../ha-input-helper-text";
import "../ha-svg-icon";
import "./state-badge";
export declare class HaStatisticPicker extends LitElement {
    hass: HomeAssistant;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    statisticTypes?: "mean" | "sum";
    allowCustomEntity: any;
    statisticIds?: StatisticsMetaData[];
    helpMissingEntityUrl: string;
    /**
     * Show only statistics natively stored with these units of measurements.
     * @type {Array}
     * @attr include-statistics-unit-of-measurement
     */
    includeStatisticsUnitOfMeasurement?: string | string[];
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
     * Show only statistics on entities.
     * @type {Boolean}
     * @attr entities-only
     */
    entitiesOnly: boolean;
    /**
     * List of statistics to be excluded.
     * @type {Array}
     * @attr exclude-statistics
     */
    excludeStatistics?: string[];
    hideClearIcon: boolean;
    private _picker?;
    willUpdate(changedProps: PropertyValues): void;
    private _getStatisticIds;
    private _getItems;
    private _getAdditionalItems;
    private _getStatisticsItems;
    private _statisticMetaData;
    private _valueRenderer;
    private _computeItem;
    private _rowRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    private _searchFn;
    private _valueChanged;
    open(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-statistic-picker": HaStatisticPicker;
    }
}
