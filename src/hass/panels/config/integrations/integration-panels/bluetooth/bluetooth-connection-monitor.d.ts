import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-fab";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-relative-time";
import "../../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../../types";
import "../../../../../components/ha-metric";
export declare class BluetoothConnectionMonitorPanel extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _data;
    private _scanners;
    private _addressNames;
    private _sourceDevices;
    private _activeGrouping?;
    private _activeCollapsed;
    private _unsubConnectionAllocations?;
    private _unsubScanners?;
    private _unsub_advertisements?;
    private _connectionAllocationData;
    connectedCallback(): void;
    private _subscribeBluetoothConnectionAllocations;
    disconnectedCallback(): void;
    private _columns;
    private _dataWithNamedSourceAndIds;
    protected render(): TemplateResult;
    private _handleGroupingChanged;
    private _handleCollapseChanged;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "bluetooth-connection-monitor": BluetoothConnectionMonitorPanel;
    }
}
