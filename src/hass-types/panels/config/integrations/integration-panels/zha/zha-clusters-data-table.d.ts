import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/data-table/ha-data-table";
import type { Cluster } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
export interface ClusterRowData extends Cluster {
    cluster?: Cluster;
    cluster_id?: string;
}
export declare class ZHAClustersDataTable extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    clusters: Cluster[];
    private _dataTable;
    private _clusters;
    private _columns;
    clearSelection(): void;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-clusters-data-table": ZHAClustersDataTable;
    }
}
