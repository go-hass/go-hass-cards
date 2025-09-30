export type DataTableFilters = Record<string, {
    value: DataTableFiltersValue;
    items: Set<string> | undefined;
}>;
export type DataTableFiltersValue = string[] | {
    key: string[];
} | undefined;
export type DataTableFiltersValues = Record<string, DataTableFiltersValue>;
export type DataTableFiltersItems = Record<string, Set<string> | undefined>;
export declare const serializeFilters: (value: DataTableFilters) => {};
export declare const deserializeFilters: (value: DataTableFilters) => {};
