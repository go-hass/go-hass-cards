import type { EntityHistoryState } from "../../../../data/history";
export declare const coordinates: (history: [number, number][], width: number, height: number, maxDetails: number, limits?: {
    minX?: number;
    maxX?: number;
    minY?: number;
    maxY?: number;
}, useMean?: boolean) => {
    points: [number, number][];
    yAxisOrigin: number;
};
export declare const coordinatesMinimalResponseCompressedState: (history: EntityHistoryState[] | undefined, width: number, height: number, maxDetails: number, limits?: {
    minX?: number;
    maxX?: number;
    minY?: number;
    maxY?: number;
}, useMean?: boolean) => {
    points: [number, number][];
    yAxisOrigin: number;
};
