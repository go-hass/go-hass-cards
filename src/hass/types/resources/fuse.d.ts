import Fuse, { type FuseIndex, type FuseResult, type FuseSearchOptions, type IFuseOptions } from "fuse.js";
export interface FuseKey {
    getFn: null;
    id: string;
    path: string[];
    src: string;
    weight: number;
}
export declare class HaFuse<T> extends Fuse<T> {
    constructor(list: readonly T[], options?: IFuseOptions<T>, index?: FuseIndex<T>);
    /**
     * Performs a multi-term search across the indexed data.
     * Splits the search string into individual terms and performs an AND operation between terms,
     * where each term is searched across all indexed keys with an OR operation. words with less than
     * 2 characters are ignored. If no valid terms are found, the search will return null.
     *
     * @param search - The search string to split into terms. Terms are space-separated.
     * @param options - Optional Fuse.js search options to customize the search behavior.
     * @typeParam R - The type of the result items. Defaults to T (the type of the indexed items).
     * @returns An array of FuseResult objects containing matched items and their matching information.
     *          If no valid terms are found (after filtering by minimum length), returns all items with empty matches.
     */
    multiTermsSearch(search: string, options?: FuseSearchOptions): FuseResult<T>[] | null;
}
