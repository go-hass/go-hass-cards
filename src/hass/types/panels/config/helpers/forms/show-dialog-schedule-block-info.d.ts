export interface ScheduleBlockInfo {
    from: string;
    to: string;
    data?: Record<string, any>;
}
export interface ScheduleBlockInfoDialogParams {
    block: ScheduleBlockInfo;
    updateBlock?: (update: ScheduleBlockInfo) => void;
    deleteBlock?: () => void;
}
export declare const loadScheduleBlockInfoDialog: () => Promise<typeof import("./dialog-schedule-block-info")>;
export declare const showScheduleBlockInfoDialog: (element: HTMLElement, params: ScheduleBlockInfoDialogParams) => void;
