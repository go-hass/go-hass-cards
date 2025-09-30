import type { EChartsType } from "echarts/core";
import type { ECElementEvent } from "echarts/types/dist/shared";
import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { Themes } from "../../data/ws-themes";
import type { ECOption } from "../../resources/echarts";
import type { HomeAssistant } from "../../types";
import "../ha-icon-button";
import "../chips/ha-assist-chip";
export declare const MIN_TIME_BETWEEN_UPDATES: number;
export type CustomLegendOption = ECOption["legend"] & {
    type: "custom";
    data?: {
        id?: string;
        secondaryIds?: string[];
        name: string;
        itemStyle?: Record<string, any>;
    }[];
};
export declare class HaChartBase extends LitElement {
    chart?: EChartsType;
    hass: HomeAssistant;
    data: ECOption["series"];
    options?: ECOption;
    height?: string;
    expandLegend?: boolean;
    smallControls?: boolean;
    hideResetButton?: boolean;
    extraComponents?: any[];
    _themes: Themes;
    private _isZoomed;
    private _zoomRatio;
    private _minutesDifference;
    private _hiddenDatasets;
    private _modifierPressed;
    private _isTouchDevice;
    private _lastTapTime?;
    private _resizeController;
    private _loading;
    private _reducedMotion;
    private _listeners;
    private _originalZrFlush?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderLegend;
    private _formatTimeLabel;
    private _setupChart;
    private _getAllIdsFromLegend;
    private _updateHiddenStatsFromOptions;
    private _getDataZoomConfig;
    private _createOptions;
    private _createTheme;
    private _getSeries;
    private _getDefaultHeight;
    private _setChartOptions;
    private _handleClickZoom;
    zoom(start: number, end: number, silent?: boolean): void;
    private _handleZoomReset;
    private _handleDataZoomEvent;
    private _legendClick;
    private _toggleExpandedLegend;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-chart-base": HaChartBase;
    }
    interface HASSDomEvents {
        "dataset-hidden": {
            id: string;
        };
        "dataset-unhidden": {
            id: string;
        };
        "chart-click": ECElementEvent;
        "chart-zoom": {
            start: number;
            end: number;
        };
    }
}
