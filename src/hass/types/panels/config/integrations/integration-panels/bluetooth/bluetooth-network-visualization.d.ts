import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/chart/ha-network-graph";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class BluetoothNetworkVisualization extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    route: Route;
    private _data;
    private _scanners;
    private _sourceDevices;
    private _unsub_advertisements?;
    private _unsub_scanners?;
    private _throttledUpdateData;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getRssiColorVar;
    private _formatNetworkData;
    private _getBluetoothDeviceName;
    private _getLineWidth;
    private _tooltipFormatter;
    private _handleChartClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "bluetooth-network-visualization": BluetoothNetworkVisualization;
    }
}
