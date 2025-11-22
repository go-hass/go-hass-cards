import type { StatisticsValidationResult } from "../../../data/recorder";
export declare const loadFixDialog: () => Promise<typeof import("./dialog-statistics-fix")>;
export interface DialogStatisticsFixParams {
    issue: StatisticsValidationResult;
    fixedCallback?: () => void;
    cancelCallback?: () => void;
}
export declare const showFixStatisticsDialog: (element: HTMLElement, detailParams: DialogStatisticsFixParams) => Promise<unknown>;
