import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { LineChartEntity } from "../../data/history";
import type { HomeAssistant } from "../../types";
export declare class StateHistoryChartLine extends LitElement {
    hass: HomeAssistant;
    data: LineChartEntity[];
    names?: Record<string, string>;
    unit?: string;
    identifier?: string;
    showNames: boolean;
    clickForMoreInfo: boolean;
    startTime: Date;
    endTime: Date;
    paddingYAxis: number;
    chartIndex?: any;
    logarithmicScale: boolean;
    minYAxis?: number;
    maxYAxis?: number;
    fitYData: boolean;
    height?: string;
    expandLegend?: boolean;
    hideResetButton?: boolean;
    private _chartData;
    private _entityIds;
    private _datasetToDataIndex;
    private _chartOptions?;
    private _hiddenStats;
    private _yWidth;
    private _visualMap?;
    private _chartTime;
    private _previousYAxisLabelValue;
    private _yAxisMaximumFractionDigits;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderTooltip;
    private _datasetHidden;
    private _datasetUnhidden;
    zoom(start: number, end: number): void;
    private _handleDataZoom;
    willUpdate(changedProps: PropertyValues): void;
    private _generateData;
    private _formatYAxisLabel;
    private _clampYAxis;
    private _roundYAxis;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-history-chart-line": StateHistoryChartLine;
    }
}
