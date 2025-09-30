import type { LovelaceGridOptions, LovelaceLayoutOptions } from "../types";
export declare const GRID_COLUMN_MULTIPLIER = 3;
export declare const migrateLayoutToGridOptions: (options: LovelaceLayoutOptions) => LovelaceGridOptions;
export declare const DEFAULT_GRID_SIZE: CardGridSize;
export interface CardGridSize {
    rows: number | "auto";
    columns: number | "full";
}
export declare const isPreciseMode: (options: LovelaceGridOptions) => boolean;
export declare const computeCardGridSize: (options: LovelaceGridOptions) => CardGridSize;
