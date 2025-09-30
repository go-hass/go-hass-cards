import type { EntityHistoryState } from "../../../../data/history";
export declare const coordinates: (history: any, hours: number, width: number, detail: number, limits?: {
    min?: number;
    max?: number;
}) => [number, number][] | undefined;
export declare const coordinatesMinimalResponseCompressedState: (history: EntityHistoryState[], hours: number, width: number, detail: number, limits?: {
    min?: number;
    max?: number;
}) => [number, number][] | undefined;
