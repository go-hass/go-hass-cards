/**
 * Creates a type predicate function for determining if an array literal includes a given value
 * @param array - The array to check
 * @returns A type predicate function
 */
export declare const arrayLiteralIncludes: <T extends readonly unknown[]>(array: T) => (searchElement: unknown, fromIndex?: number) => searchElement is T[number];
