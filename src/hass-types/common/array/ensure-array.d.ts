type NonNullUndefined<T> = T extends undefined ? never : T extends null ? never : T;
/**
 * Ensure that the input is an array or wrap it in an array
 * @param value - The value to ensure is an array
 */
export declare function ensureArray(value: undefined): undefined;
export declare function ensureArray(value: null): null;
export declare function ensureArray<T>(value: T | T[] | readonly T[]): NonNullUndefined<T>[];
export {};
