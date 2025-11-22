import type { LineSeriesOption } from "echarts";
export declare function downSampleLineData<T extends [number, number] | NonNullable<LineSeriesOption["data"]>[number]>(data: T[] | undefined, maxDetails: number, minX?: number, maxX?: number, useMean?: boolean): T[];
