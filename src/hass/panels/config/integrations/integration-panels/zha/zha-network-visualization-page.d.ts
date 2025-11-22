import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/chart/ha-network-graph";
import "../../../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class ZHANetworkVisualizationPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _networkData;
    private _devices;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _fetchData;
    private _tooltipFormatter;
    private _refreshTopology;
    private _handleChartClick;
    static get styles(): CSSResultGroup;
    private _createChartData;
    private _getLQIWidth;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-network-visualization-page": ZHANetworkVisualizationPage;
    }
}
