/**
 * Orders object properties according to a specified key order.
 * Properties not in the order array will be placed at the end.
 */
export declare function orderProperties<T extends Record<string, any>>(obj: T, keys: readonly string[]): T;
