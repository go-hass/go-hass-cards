import type { CalendarEventData } from "../../data/calendar";
export interface CalendarEventEditDialogParams {
    calendarId?: string;
    selectedDate?: Date;
    entry?: CalendarEventData;
    canDelete?: boolean;
    updated: () => void;
}
export declare const loadCalendarEventEditDialog: () => Promise<typeof import("./dialog-calendar-event-editor")>;
export declare const showCalendarEventEditDialog: (element: HTMLElement, detailParams: CalendarEventEditDialogParams) => void;
