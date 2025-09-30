import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-checkbox";
import "../ha-svg-icon";
import "../search-input";
import type { LocalizeFunc } from "../../common/translations/localize";
export interface RowClickedEvent {
    id: string;
}
export interface SelectionChangedEvent {
    value: string[];
}
export interface CollapsedChangedEvent {
    value: string[];
}
export interface SortingChangedEvent {
    column: string;
    direction: SortingDirection;
}
export type SortingDirection = "desc" | "asc" | null;
export type DataTableColumnContainer<T = any> = Record<string, DataTableColumnData<T>>;
export interface DataTableSortColumnData {
    sortable?: boolean;
    filterable?: boolean;
    filterKey?: string;
    valueColumn?: string;
    direction?: SortingDirection;
    groupable?: boolean;
    moveable?: boolean;
    hideable?: boolean;
    defaultHidden?: boolean;
    showNarrow?: boolean;
}
export interface DataTableColumnData<T = any> extends DataTableSortColumnData {
    main?: boolean;
    title: TemplateResult | string;
    label?: TemplateResult | string;
    type?: "numeric" | "ip" | "icon" | "icon-button" | "overflow" | "overflow-menu" | "flex";
    template?: (row: T) => TemplateResult | string | typeof nothing;
    extraTemplate?: (row: T) => TemplateResult | string | typeof nothing;
    minWidth?: string;
    maxWidth?: string;
    flex?: number;
    forceLTR?: boolean;
    hidden?: boolean;
}
export type ClonedDataTableColumnData = Omit<DataTableColumnData, "title"> & {
    title?: TemplateResult | string;
};
export interface DataTableRowData {
    [key: string]: any;
    selectable?: boolean;
}
export type SortableColumnContainer = Record<string, ClonedDataTableColumnData>;
export declare class HaDataTable extends LitElement {
    hass: HomeAssistant;
    localizeFunc?: LocalizeFunc;
    narrow: boolean;
    columns: DataTableColumnContainer;
    data: DataTableRowData[];
    selectable: boolean;
    clickable: boolean;
    hasFab: boolean;
    /**
     * Add an extra row at the bottom of the data table
     * @type {TemplateResult}
     */
    appendRow?: any;
    autoHeight: boolean;
    id: string;
    noDataText?: string;
    searchLabel?: string;
    noLabelFloat?: boolean;
    filter: string;
    groupColumn?: string;
    groupOrder?: string[];
    sortColumn?: string;
    sortDirection: SortingDirection;
    initialCollapsedGroups?: string[];
    hiddenColumns?: string[];
    columnOrder?: string[];
    private _filterable;
    private _filter;
    private _filteredData;
    private _headerHeight;
    private _header;
    private _collapsedGroups;
    private _lastSelectedRowId;
    private _checkableRowsCount?;
    private _checkedRows;
    private _sortColumns;
    private _curRequest;
    private _lastUpdate;
    private _savedScrollPos?;
    private _debounceSearch;
    clearSelection(): void;
    selectAll(): void;
    select(ids: string[], clear?: boolean): void;
    unselect(ids: string[]): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected updated(): void;
    willUpdate(properties: PropertyValues): void;
    private _sortedColumns;
    protected render(): TemplateResult<1>;
    private _keyFunction;
    private _renderRow;
    private _sortFilterData;
    private _groupData;
    private _memFilterData;
    private _handleHeaderClick;
    private _handleHeaderRowCheckboxClick;
    private _handleRowCheckboxClicked;
    private _selectRange;
    private _handleRowClick;
    private _setTitle;
    private _checkedRowsChanged;
    private _handleSearchChange;
    private _calcTableHeight;
    private _saveScrollPos;
    private _scrollContent;
    private _collapseGroup;
    expandAllGroups(): void;
    collapseAllGroups(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-data-table": HaDataTable;
    }
    interface HASSDomEvents {
        "selection-changed": SelectionChangedEvent;
        "row-click": RowClickedEvent;
        "sorting-changed": SortingChangedEvent;
        "collapsed-changed": CollapsedChangedEvent;
    }
}
