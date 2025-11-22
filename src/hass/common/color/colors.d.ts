export declare const COLORS: string[];
export declare function getColorByIndex(index: number): string;
export declare function getGraphColorByIndex(index: number, style: CSSStyleDeclaration): string;
export declare const getAllGraphColors: import("memoize-one").MemoizedFn<(style: CSSStyleDeclaration) => string[]>;
