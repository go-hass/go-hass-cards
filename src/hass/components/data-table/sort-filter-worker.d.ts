import type { ClonedDataTableColumnData, DataTableRowData, SortableColumnContainer, SortingDirection } from "./ha-data-table";
declare const api: {
    filterData: (data: DataTableRowData[], columns: SortableColumnContainer, filter: string) => DataTableRowData[];
    sortData: (data: DataTableRowData[], column: ClonedDataTableColumnData, direction: SortingDirection, sortColumn: string, language?: string) => DataTableRowData[];
};
export type Api = typeof api;
export {};
