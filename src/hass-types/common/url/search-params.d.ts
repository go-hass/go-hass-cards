export declare const extractSearchParamsObject: () => Record<string, string>;
export declare const extractSearchParam: (param: string) => string | null;
export declare const createSearchParam: (params: Record<string, string>) => string;
export declare const addSearchParam: (params: Record<string, string>) => string;
export declare const removeSearchParam: (param: string) => string;
