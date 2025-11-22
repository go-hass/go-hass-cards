import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { TimelineEntity } from "../../data/history";
import type { HomeAssistant } from "../../types";
export declare class StateHistoryChartTimeline extends LitElement {
    hass: HomeAssistant;
    data: TimelineEntity[];
    narrow: boolean;
    names?: Record<string, string>;
    unit?: string;
    identifier?: string;
    showNames: boolean;
    clickForMoreInfo: boolean;
    chunked: boolean;
    startTime: Date;
    endTime: Date;
    paddingYAxis: number;
    chartIndex?: any;
    hideResetButton?: boolean;
    private _chartData;
    private _chartOptions?;
    private _yWidth;
    private _chartTime;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderItem;
    private _renderTooltip;
    willUpdate(changedProps: PropertyValues): void;
    private _createOptions;
    zoom(start: number, end: number): void;
    private _handleDataZoom;
    private _generateData;
    private _handleChartClick;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-history-chart-timeline": StateHistoryChartTimeline;
    }
}
