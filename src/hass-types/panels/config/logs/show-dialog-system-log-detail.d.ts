import type { LoggedError } from "../../../data/system_log";
declare global {
    interface HASSDomEvents {
        "show-dialog-system-log-detail": SystemLogDetailDialogParams;
    }
}
export interface SystemLogDetailDialogParams {
    item: LoggedError;
}
export declare const showSystemLogDetailDialog: (element: HTMLElement, systemLogDetailParams: SystemLogDetailDialogParams) => void;
