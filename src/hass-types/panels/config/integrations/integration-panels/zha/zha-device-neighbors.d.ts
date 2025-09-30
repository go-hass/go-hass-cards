import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/data-table/ha-data-table";
import type { DataTableRowData } from "../../../../../components/data-table/ha-data-table";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-code-editor";
import type { ZHADevice } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
export interface DeviceRowData extends DataTableRowData {
    id: string;
    name: string;
    lqi: number;
    depth: number;
    relationship: string;
}
declare class ZHADeviceNeighbors extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    device?: ZHADevice;
    private _devices;
    protected updated(changedProperties: PropertyValues): void;
    private _deviceNeighbors;
    private _columns;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _fetchData;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-neighbors": ZHADeviceNeighbors;
    }
}
export {};
