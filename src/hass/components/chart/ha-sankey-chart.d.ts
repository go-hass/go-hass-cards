import { LitElement } from "lit";
import type { EChartsType } from "echarts/core";
import type { HomeAssistant } from "../../types";
import "./ha-chart-base";
import "../ha-alert";
export interface Node {
    id: string;
    value: number;
    index: number;
    label?: string;
    color?: string;
    passThrough?: boolean;
}
export interface Link {
    source: string;
    target: string;
    value?: number;
}
export interface SankeyChartData {
    nodes: Node[];
    links: Link[];
}
export declare class HaSankeyChart extends LitElement {
    hass: HomeAssistant;
    data: SankeyChartData;
    vertical: boolean;
    valueFormatter?: (value: number) => string;
    chart?: EChartsType;
    private _sizeController;
    render(): import("lit-html").TemplateResult<1>;
    private _renderTooltip;
    private _createData;
    private _processLinks;
    private _findParentIndex;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-sankey-chart": HaSankeyChart;
    }
}
