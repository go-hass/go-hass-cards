import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { Statistics, StatisticsMetaData, StatisticType } from "../../data/recorder";
import type { HomeAssistant } from "../../types";
import "./ha-chart-base";
export declare const supportedStatTypeMap: Record<StatisticType, StatisticType>;
export declare class StatisticsChart extends LitElement {
    hass: HomeAssistant;
    statisticsData?: Statistics;
    metadata?: Record<string, StatisticsMetaData>;
    names?: Record<string, string>;
    unit?: string;
    startTime?: Date;
    endTime?: Date;
    statTypes: StatisticType[];
    chartType: "line" | "bar";
    minYAxis?: number;
    maxYAxis?: number;
    fitYData: boolean;
    hideLegend: boolean;
    logarithmicScale: boolean;
    isLoadingData: boolean;
    clickForMoreInfo: boolean;
    period?: string;
    daysToShow?: number;
    height?: string;
    expandLegend?: boolean;
    private _chartData;
    private _legendData;
    private _statisticIds;
    private _chartOptions?;
    private _hiddenStats;
    private _computedStyle?;
    private _previousYAxisLabelValue;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    willUpdate(changedProps: PropertyValues): void;
    firstUpdated(): void;
    protected render(): TemplateResult;
    private _datasetHidden;
    private _datasetUnhidden;
    private _renderTooltip;
    private _createOptions;
    private _getStatisticsMetaData;
    private _generateData;
    private _transformDataValue;
    private _clampYAxis;
    private _roundYAxis;
    private _formatYAxisLabel;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "statistics-chart": StatisticsChart;
    }
}
