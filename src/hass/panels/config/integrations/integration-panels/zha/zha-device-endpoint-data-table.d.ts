import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/data-table/ha-data-table";
import type { DataTableRowData } from "../../../../../components/data-table/ha-data-table";
import type { ZHADeviceEndpoint, ZHAEntityReference } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
export interface DeviceEndpointRowData extends DataTableRowData {
    id: string;
    name: string;
    model: string;
    manufacturer: string;
    endpoint_id: number;
    entities: ZHAEntityReference[];
}
export declare class ZHADeviceEndpointDataTable extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    selectable: boolean;
    deviceEndpoints: ZHADeviceEndpoint[];
    private _dataTable;
    private _deviceEndpoints;
    private _columns;
    clearSelection(): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-endpoint-data-table": ZHADeviceEndpointDataTable;
    }
}
