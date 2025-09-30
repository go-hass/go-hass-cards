import type { StatisticsMetaData } from "../../../data/recorder";
export declare const loadAdjustSumDialog: () => Promise<typeof import("./dialog-statistics-adjust-sum")>;
export interface DialogStatisticsAdjustSumParams {
    statistic: StatisticsMetaData;
}
export declare const showStatisticsAdjustSumDialog: (element: HTMLElement, detailParams: DialogStatisticsAdjustSumParams) => void;
