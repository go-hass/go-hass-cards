import type { Api } from "./sort-filter-worker";
type FilterDataType = Api["filterData"];
type FilterDataParamTypes = Parameters<FilterDataType>;
type SortDataType = Api["sortData"];
type SortDataParamTypes = Parameters<SortDataType>;
export declare const filterData: (data: FilterDataParamTypes[0], columns: FilterDataParamTypes[1], filter: FilterDataParamTypes[2]) => Promise<ReturnType<FilterDataType>>;
export declare const sortData: (data: SortDataParamTypes[0], columns: SortDataParamTypes[1], direction: SortDataParamTypes[2], sortColumn: SortDataParamTypes[3], language?: SortDataParamTypes[4]) => Promise<ReturnType<SortDataType>>;
export {};
