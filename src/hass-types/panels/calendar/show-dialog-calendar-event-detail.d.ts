import type { CalendarEventData } from "../../data/calendar";
export interface CalendarEventDetailDialogParams {
    calendarId: string;
    entry: CalendarEventData;
    canDelete?: boolean;
    canEdit?: boolean;
    updated: () => void;
    color?: string;
}
export declare const loadCalendarEventDetailDialog: () => Promise<typeof import("./dialog-calendar-event-detail")>;
export declare const showCalendarEventDetailDialog: (element: HTMLElement, detailParams: CalendarEventDetailDialogParams) => void;
