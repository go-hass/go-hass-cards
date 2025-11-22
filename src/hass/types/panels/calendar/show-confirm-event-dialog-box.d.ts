import type { TemplateResult } from "lit";
import type { RecurrenceRange } from "../../data/calendar";
export interface ConfirmEventDialogBoxParams {
    confirmText?: string;
    confirmFutureText?: string;
    confirm?: (recurrenceRange: RecurrenceRange) => void;
    cancel?: () => void;
    text?: string | TemplateResult;
    title: string;
}
export declare const loadGenericDialog: () => Promise<typeof import("./confirm-event-dialog-box")>;
export declare const showConfirmEventDialog: (element: HTMLElement, dialogParams: ConfirmEventDialogBoxParams) => Promise<RecurrenceRange>;
