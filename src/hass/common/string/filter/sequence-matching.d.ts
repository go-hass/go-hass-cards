/**
 * Determine whether a sequence of letters exists in another string,
 *   in that order, allowing for skipping. Ex: "chdr" exists in "chandelier")
 *
 * @param {string} filter - Sequence of letters to check for
 * @param {ScorableTextItem} item - Item against whose strings will be checked
 *
 * @return {number} Score representing how well the word matches the filter. Return of 0 means no match.
 */
export declare const fuzzySequentialMatch: (filter: string, item: ScorableTextItem) => number;
/**
 * An interface that objects must extend in order to use the fuzzy sequence matcher
 *
 * @param {number} score - A number representing the existence and strength of a match.
 *    - `< 0` means a good match that starts in the middle of the string
 *    - `> 0` means a good match that starts at the beginning of the string
 *    - `0` means just barely a match
 *    - `undefined` means not a match
 *
 * @param {string} strings - Array of strings (aliases) representing the item. The filter string will be compared against each of these for a match.
 *
 */
export interface ScorableTextItem {
    score?: number;
    strings: string[];
}
type FuzzyFilterSort = <T extends ScorableTextItem>(filter: string, items: T[]) => T[];
export declare const fuzzyFilterSort: FuzzyFilterSort;
export {};
